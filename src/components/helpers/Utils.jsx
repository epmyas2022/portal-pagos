import React from "react";

import { SlotProvider, useSlot } from "./providers/providers";

/**
 * Render children if condition is true
 * @param {boolean} condition
 * @param {ReactNode} children
 * @returns {ReactNode}
 * @example
 * <RenderIf condition={true}>
 *   <div>Hello</div>
 * </RenderIf>
 */

export const RenderIf = ({ condition, children }) => {
  if (!condition) return null;

  return children;
};

/**
 * Render children if condition is true
 * @param {boolean} condition
 * @param {ReactNode} children
 * @param {ReactNode} elseChildren
 * @returns {ReactNode}
 * @example
 * <RenderIfElse condition={true} elseChildren={<div>World</div>}>
 */
export const RenderIfElse = ({ condition, children, elseChildren }) => {
  if (!condition) return elseChildren;

  return children;
};

/**
 * Render children if condition is true
 * @param {boolean} condition
 * @param {ReactNode} children
 * @param {ReactNode} elseChildren
 * @returns {ReactNode}
 * @example
 * <RenderIfElse condition={true} elseChildren={<div>World</div>}>
 */

export const RenderIfNot = ({ condition, children }) => {
  if (condition) return null;

  return children;
};

/**
 * Render children if condition is false
 * @param {boolean} condition
 * @param {ReactNode} children
 * @param {ReactNode} elseChildren
 * @returns {ReactNode}
 * @example
 * <RenderIfNotElse condition={true} elseChildren={<div>World</div>}>
 */
export const RenderIfNotElse = ({ condition, children, elseChildren }) => {
  if (condition) return elseChildren;

  return children;
};

/**
 * Render slot children
 * @param {string} name
 * @param {ReactNode} children
 * @returns {ReactNode}
 * @example
 * <Slot name="example">
 *  <template slot="example">
 *   <h1> This is a slot</h1>
 * </template>
 * </Slot>
 */
export const Slot = ({ name, children, data = {} }) => {
  return (
    <SlotProvider value={data}>
      {React.Children.map(children, (child) => {
        if (
          child.type === "template" &&
          child.props.slot === name &&
          child?.props?.children
        ) {
          return React.cloneElement(child.props.children);
        }
      })}
    </SlotProvider>
  );
};

/**
 * Render slot content children
 * @param {Function|ReactNode} children
 * @returns {ReactNode}
 * @example
 * <SlotContent>
 * {(props) =><h1>Hola mundo {props.name}</h1>}
 * </SlotContent>
 */
export const SlotContent = ({ children }) => {
  const slotData = useSlot();

  if (!(children instanceof Function)) return children;

  if (slotData instanceof Array)
    return slotData.map((data, index) => children(data, index));


  return children(slotData);
};
