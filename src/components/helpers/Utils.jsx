import React from "react";

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
  return React.Children.map(children, (child) => {

    if (child.type === "template" && child.props.slot === name )
      return React.cloneElement(child.props.children, { ...data });
  });
};
