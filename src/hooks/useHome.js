import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import PocketBaseInstance from "../lib/pocketbase";

export default function useHome() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validates = {
    nombre: {
      register: register("nombre", {
        required: "El nombre es requerido",
        pattern: {
          value: /^[a-zA-Z\s]*$/,
          message: "El nombre no es valido",
        },
      }),
    },

    salon: {
      register: register("salon", {
        required: "El salon es requerido",
        pattern: {
          value: /^[a-zA-Z\s]*$/,
          message: "El salon no es valido",
        },
      }),
    },

    is_pagado: {
      register: register("is_pagado", {
        required: false,
      }),
    },
  };

  const loadStudents = () => {
    PocketBaseInstance()
      .collection("estudiantes")
      .getList(1, 30)
      .then((response) => {
        setData(response.items);
      });
  };

  useEffect(() => {
    loadStudents();

    if (!editMode) reset();

    if (editData && editMode) {
      setEditData({ ...editData });
      setEditMode(false);
    }
  }, [editData, editMode, reset]);

  const handleEdit = (data) => {
    setEditMode(true);
    setEditData(data);
    setShowModal(true);
  };

  const addStudent = async (data) => {
    console.log(data);
    try {
      await PocketBaseInstance().collection("estudiantes").create(data);
      loadStudents();
      toast.success("Estudiante agregado correctamente");
      setShowModal(false);
    } catch (e) {
      toast.error("Error al agregar el estudiante");
    } finally {
      reset();
    }
  };

  const updateStudent = async (data) => {
    try {
      await PocketBaseInstance()
        .collection("estudiantes")
        .update(editData.id, data);
      loadStudents();
      toast.success("Estudiante actualizado correctamente");
      setShowModal(false);
    } catch (e) {
      toast.error("Error al actualizar el estudiante");
    } finally {
      reset();
    }
  };


  const deleteStudent = async (id) => {
    try {
      await PocketBaseInstance().collection("estudiantes").delete(id);
      loadStudents();
      toast.success("Estudiante eliminado correctamente");
    } catch (e) {
      toast.error("Error al eliminar el estudiante");
    }
  }

  return {
    data,
    showModal,
    setShowModal,
    validates,
    handleSubmit,
    errors,
    addStudent,
    updateStudent,
    deleteStudent,
    editData,
    handleEdit,
    setEditData,
  };
}
