import { j as jsxRuntimeExports, r as reactExports, c as React, R as React$1, d as useNavigate, a as LoadingPage, L as Link, u as ue } from "./index-Di1Y5MzV.js";
import { c as createLucideIcon, S as Shield, M as MediaType, A as ActivityCategory, T as TeamRole, E as ExternalBlob } from "./backend-CA2XpFJp.js";
import { S as Slot, c as composeRefs, u as useComposedRefs, L as Label, I as Input, T as Textarea } from "./textarea-COvvYzql.js";
import { c as clsx, a as cn } from "./utils-DdB4LPY_.js";
import { I as Image, S as Skeleton } from "./skeleton-IflWNoss.js";
import { u as useAuth } from "./use-auth-Cq73UH12.js";
import { m as motion, M as MapPin, n as Mail, k as useAdmissionInfo, o as useUpdateAdmissionInfo, p as useContactSubmissions, q as useMarkContactRead, e as useGalleryItems, r as useAddGalleryItem, s as useDeleteGalleryItem, X, d as useBranches, t as useAddBranch, v as useDeleteBranch, b as useActivities, w as useAddActivity, x as useDeleteActivity, a as useTeamMembers, y as useAddTeamMember, z as useDeleteTeamMember, u as useOrgInfo, A as useUpdateOrgInfo, B as useUpdateOrgLogo } from "./use-backend-CkKQvMLG.js";
import { S as Star } from "./star-w2kgbZwp.js";
import { U as Users } from "./users-CcVL-bXY.js";
import { F as FileText } from "./file-text-CiJvhevZ.js";
import { T as Tent } from "./tent-KMKJzj4R.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var useLayoutEffect2 = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
var useInsertionEffect = React[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  {
    const isControlledRef = reactExports.useRef(prop !== void 0);
    reactExports.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = reactExports.useCallback(
    (nextValue) => {
      var _a;
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = reactExports.useState(defaultProp);
  const prevValueRef = reactExports.useRef(value);
  const onChangeRef = reactExports.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  reactExports.useEffect(() => {
    var _a;
    if (prevValueRef.current !== value) {
      (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
function useSize(element) {
  const [size, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = /* @__PURE__ */ createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState2 = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState: getState2, getInitialState, subscribe };
  const initialState = state = createState(setState, getState2, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React$1.useSyncExternalStore(
    api.subscribe,
    React$1.useCallback(() => selector(api.getState()), [api, selector]),
    React$1.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React$1.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
const useAppStore = create((set) => ({
  modal: { isOpen: false, content: null },
  admin: { activeTab: "org" },
  openModal: (content) => set({ modal: { isOpen: true, content } }),
  closeModal: () => set({ modal: { isOpen: false, content: null } }),
  setAdminTab: (tab) => set((state) => ({ admin: { ...state.admin, activeTab: tab } }))
}));
const TAB_LIST = [
  { id: "overview", label: "Overview", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }) },
  { id: "org", label: "Org Info", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }) },
  { id: "team", label: "Team", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) },
  {
    id: "activities",
    label: "Activities",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" })
  },
  { id: "branches", label: "Branches", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }) },
  { id: "gallery", label: "Gallery", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4" }) },
  { id: "contacts", label: "Messages", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) },
  {
    id: "admission",
    label: "Admission",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" })
  }
];
function SectionTitle({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-5 pb-3 border-b-2 border-primary flex items-center gap-2", children });
}
function EmptyState({ icon, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-25 mb-3 flex justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: text })
  ] });
}
function UploadButton({
  label,
  accept,
  onFile,
  loading
}) {
  const ref = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref,
        type: "file",
        accept,
        className: "hidden",
        onChange: (e) => {
          var _a;
          const f = (_a = e.target.files) == null ? void 0 : _a[0];
          if (f) onFile(f);
          e.target.value = "";
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        disabled: loading,
        onClick: () => {
          var _a;
          return (_a = ref.current) == null ? void 0 : _a.click();
        },
        className: "gap-1.5",
        "data-ocid": "admin.upload_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
          loading ? "Uploading…" : label
        ]
      }
    )
  ] });
}
function OverviewTab({ onNavigate }) {
  const { data: members = [] } = useTeamMembers();
  const { data: gallery = [] } = useGalleryItems();
  const { data: submissions = [] } = useContactSubmissions();
  const { data: branches = [] } = useBranches();
  const { data: activities = [] } = useActivities();
  const stats = [
    {
      label: "Team Members",
      value: members.length,
      tab: "team",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6" })
    },
    {
      label: "Gallery Items",
      value: gallery.length,
      tab: "gallery",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-6 w-6" })
    },
    {
      label: "Unread Messages",
      value: submissions.filter((s) => !s.isRead).length,
      tab: "contacts",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6" })
    },
    {
      label: "Branches",
      value: branches.length,
      tab: "branches",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" })
    },
    {
      label: "Activities",
      value: activities.length,
      tab: "activities",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-6 w-6" })
    },
    {
      label: "Total Messages",
      value: submissions.length,
      tab: "contacts",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6" })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.overview_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-secondary" }),
      "Dashboard Overview"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onNavigate(s.tab),
        className: "bg-muted/50 border border-border p-4 text-left hover:bg-primary/5 hover:border-primary transition-smooth group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground group-hover:text-primary transition-smooth", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-3xl text-foreground", children: s.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider font-medium", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium mb-3 uppercase tracking-wider", children: "Quick Navigation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TAB_LIST.filter((t) => t.id !== "overview").map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onNavigate(t.id),
          className: "flex items-center gap-1.5 px-3 py-2 text-xs border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth font-medium",
          children: [
            t.icon,
            t.label
          ]
        },
        t.id
      )) })
    ] })
  ] });
}
function OrgTab() {
  const { data: orgInfo, isLoading } = useOrgInfo();
  const updateOrgInfo = useUpdateOrgInfo();
  const updateOrgLogo = useUpdateOrgLogo();
  const [uploading, setUploading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    tagline: "",
    department: "",
    registrationNo: "",
    affiliationNo: "",
    address: "",
    phone: "",
    email: "",
    mission: []
  });
  const [missionText, setMissionText] = reactExports.useState("");
  const [initialised, setInitialised] = reactExports.useState(false);
  if (!initialised && orgInfo) {
    setForm({ ...orgInfo, mission: orgInfo.mission ?? [] });
    setMissionText((orgInfo.mission ?? []).join("\n"));
    setInitialised(true);
  }
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const missionArr = missionText.split("\n").map((s) => s.trim()).filter(Boolean);
      await updateOrgInfo.mutateAsync({ ...form, mission: missionArr });
      ue.success("Organisation info saved successfully.");
    } catch {
      ue.error("Failed to save organisation info.");
    }
  };
  const handleLogoUpload = async (file) => {
    setUploading(true);
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      const blob = ExternalBlob.fromBytes(bytes);
      await updateOrgLogo.mutateAsync(blob);
      ue.success("Logo updated.");
    } catch {
      ue.error("Logo upload failed.");
    } finally {
      setUploading(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...Array(5)].map((_, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }, i)
    )) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.org_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-secondary" }),
      "Organisation Information"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 border-2 border-border bg-muted flex items-center justify-center overflow-hidden", children: (orgInfo == null ? void 0 : orgInfo.logoBlob) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: orgInfo.logoBlob.getDirectURL(),
          alt: "Logo",
          className: "h-full w-full object-contain"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8 text-muted-foreground opacity-40" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "Organisation Logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          UploadButton,
          {
            label: "Upload Logo",
            accept: "image/*",
            onFile: handleLogoUpload,
            loading: uploading
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-4 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-name", children: "Organisation Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "org-name",
              value: form.name,
              onChange: (e) => setForm({ ...form, name: e.target.value }),
              placeholder: "Azad Hind United Squad",
              "data-ocid": "admin.org_name_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-tagline", children: "Tagline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "org-tagline",
              value: form.tagline,
              onChange: (e) => setForm({ ...form, tagline: e.target.value }),
              placeholder: "Building discipline, leadership & patriotism",
              "data-ocid": "admin.org_tagline_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-dept", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "org-dept",
              value: form.department,
              onChange: (e) => setForm({ ...form, department: e.target.value }),
              "data-ocid": "admin.org_dept_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-reg", children: "Registration No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "org-reg",
              value: form.registrationNo,
              onChange: (e) => setForm({ ...form, registrationNo: e.target.value }),
              "data-ocid": "admin.org_reg_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-affil", children: "Affiliation No." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "org-affil",
            value: form.affiliationNo,
            onChange: (e) => setForm({ ...form, affiliationNo: e.target.value }),
            "data-ocid": "admin.org_affil_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-address", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "org-address",
            value: form.address,
            onChange: (e) => setForm({ ...form, address: e.target.value }),
            rows: 2,
            "data-ocid": "admin.org_address_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-phone", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "org-phone",
              value: form.phone,
              onChange: (e) => setForm({ ...form, phone: e.target.value }),
              "data-ocid": "admin.org_phone_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "org-email",
              type: "email",
              value: form.email,
              onChange: (e) => setForm({ ...form, email: e.target.value }),
              "data-ocid": "admin.org_email_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org-mission", children: "Mission Points (one per line)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "org-mission",
            value: missionText,
            onChange: (e) => setMissionText(e.target.value),
            rows: 4,
            placeholder: "Instilling discipline and leadership in youth...",
            "data-ocid": "admin.org_mission_textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          disabled: updateOrgInfo.isPending,
          className: "military-button",
          "data-ocid": "admin.org_save_button",
          children: updateOrgInfo.isPending ? "Saving…" : "Save Changes"
        }
      )
    ] })
  ] });
}
function TeamTab() {
  const { data: members = [], isLoading } = useTeamMembers();
  const addMember = useAddTeamMember();
  const deleteMember = useDeleteTeamMember();
  const [showForm, setShowForm] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [title, setTitle] = reactExports.useState("");
  const [role, setRole] = reactExports.useState(TeamRole.trainer);
  const [photoFile, setPhotoFile] = reactExports.useState(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name.trim() || !title.trim()) {
      ue.error("Name and title are required.");
      return;
    }
    setUploading(true);
    try {
      let photoBlob = null;
      if (photoFile) {
        const bytes = new Uint8Array(await photoFile.arrayBuffer());
        photoBlob = ExternalBlob.fromBytes(bytes);
      }
      await addMember.mutateAsync({
        name: name.trim(),
        title: title.trim(),
        role,
        photoBlob,
        order: BigInt(members.length + 1)
      });
      ue.success("Team member added.");
      setName("");
      setTitle("");
      setRole(TeamRole.trainer);
      setPhotoFile(null);
      setShowForm(false);
    } catch {
      ue.error("Failed to add team member.");
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.team_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-secondary" }),
        "Team Members"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowForm((v) => !v),
          className: "military-button flex items-center gap-1.5 py-2 px-4 text-sm",
          "data-ocid": "admin.team_add_button",
          children: [
            showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            showForm ? "Cancel" : "Add Member"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "bg-muted/40 border border-border p-5 mb-6",
        "data-ocid": "admin.team_add_form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4 text-sm uppercase tracking-wider", children: "New Team Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdd, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-name", children: "Full Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "m-name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    placeholder: "Ratan Halder",
                    "data-ocid": "admin.team_name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-title", children: "Title / Rank *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "m-title",
                    value: title,
                    onChange: (e) => setTitle(e.target.value),
                    placeholder: "Commanding Officer",
                    "data-ocid": "admin.team_title_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-role", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "m-role",
                    value: role,
                    onChange: (e) => setRole(e.target.value),
                    className: "w-full h-10 px-3 border border-input bg-background text-foreground text-sm rounded-sm",
                    "data-ocid": "admin.team_role_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: TeamRole.leadership, children: "Leadership" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: TeamRole.trainer, children: "Trainer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: TeamRole.senior, children: "Senior" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Photo (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    UploadButton,
                    {
                      label: photoFile ? `${photoFile.name.slice(0, 16)}…` : "Choose Photo",
                      accept: "image/*",
                      onFile: setPhotoFile
                    }
                  ),
                  photoFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPhotoFile(null),
                      className: "text-destructive hover:underline text-xs",
                      children: "Remove"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: uploading || addMember.isPending,
                className: "military-button",
                "data-ocid": "admin.team_submit_button",
                children: uploading || addMember.isPending ? "Adding…" : "Add Member"
              }
            )
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["sk-a", "sk-b", "sk-c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }, k)) }) : members.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "admin.team_empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-12 w-12" }),
        text: "No team members added yet. Add the first member above."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "admin.team_list", children: members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 border border-border p-3 bg-card hover:bg-muted/30 transition-smooth",
        "data-ocid": `admin.team_item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 border border-border bg-muted flex-shrink-0 overflow-hidden", children: m.photoBlob ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: m.photoBlob.getDirectURL(),
              alt: m.name,
              className: "h-full w-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full flex items-center justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm truncate", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              m.title,
              " · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: m.role })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: async () => {
                if (!confirm(`Delete ${m.name}?`)) return;
                await deleteMember.mutateAsync(m.id);
                ue.success("Member deleted.");
              },
              className: "p-2 hover:bg-destructive/10 text-destructive transition-smooth flex-shrink-0",
              "aria-label": "Delete member",
              "data-ocid": `admin.team_delete_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ]
      },
      String(m.id)
    )) })
  ] });
}
function ActivitiesTab() {
  const { data: activities = [], isLoading } = useActivities();
  const addActivity = useAddActivity();
  const deleteActivity = useDeleteActivity();
  const [showForm, setShowForm] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState(
    ActivityCategory.training
  );
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      ue.error("Name and description are required.");
      return;
    }
    try {
      await addActivity.mutateAsync({
        name: name.trim(),
        description: description.trim(),
        category
      });
      ue.success("Activity added.");
      setName("");
      setDescription("");
      setCategory(ActivityCategory.training);
      setShowForm(false);
    } catch {
      ue.error("Failed to add activity.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.activities_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 text-secondary" }),
        "Activities & Events"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowForm((v) => !v),
          className: "military-button flex items-center gap-1.5 py-2 px-4 text-sm",
          "data-ocid": "admin.activities_add_button",
          children: [
            showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            showForm ? "Cancel" : "Add Activity"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "bg-muted/40 border border-border p-5 mb-6",
        "data-ocid": "admin.activities_add_form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4 text-sm uppercase tracking-wider", children: "New Activity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdd, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "act-name", children: "Activity Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "act-name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    placeholder: "Leadership Training",
                    "data-ocid": "admin.activity_name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "act-cat", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "act-cat",
                    value: category,
                    onChange: (e) => setCategory(e.target.value),
                    className: "w-full h-10 px-3 border border-input bg-background text-foreground text-sm rounded-sm",
                    "data-ocid": "admin.activity_category_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: ActivityCategory.training, children: "Training" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: ActivityCategory.event, children: "Event" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "act-desc", children: "Description *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "act-desc",
                  value: description,
                  onChange: (e) => setDescription(e.target.value),
                  rows: 3,
                  placeholder: "Describe the activity...",
                  "data-ocid": "admin.activity_desc_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: addActivity.isPending,
                className: "military-button",
                "data-ocid": "admin.activity_submit_button",
                children: addActivity.isPending ? "Adding…" : "Add Activity"
              }
            )
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["sk-a", "sk-b", "sk-c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full" }, k)) }) : activities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "admin.activities_empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-12 w-12" }),
        text: "No activities added yet."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "admin.activities_list", children: activities.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-3 border border-border p-3 bg-card",
        "data-ocid": `admin.activity_item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider ${a.category === "training" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
              children: a.category
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm", children: a.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground line-clamp-1", children: a.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: async () => {
                if (!confirm("Delete this activity?")) return;
                await deleteActivity.mutateAsync(a.id);
                ue.success("Deleted.");
              },
              className: "p-2 hover:bg-destructive/10 text-destructive transition-smooth flex-shrink-0",
              "aria-label": "Delete",
              "data-ocid": `admin.activity_delete_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ]
      },
      String(a.id)
    )) })
  ] });
}
function BranchesTab() {
  const { data: branches = [], isLoading } = useBranches();
  const addBranch = useAddBranch();
  const deleteBranch = useDeleteBranch();
  const [showForm, setShowForm] = reactExports.useState(false);
  const [bName, setBName] = reactExports.useState("");
  const [bAddress, setBAddress] = reactExports.useState("");
  const [bContact, setBContact] = reactExports.useState("");
  const [bPhone, setBPhone] = reactExports.useState("");
  const [bIsHQ, setBIsHQ] = reactExports.useState(false);
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!bName.trim() || !bAddress.trim()) {
      ue.error("Name and address are required.");
      return;
    }
    try {
      await addBranch.mutateAsync({
        name: bName.trim(),
        address: bAddress.trim(),
        contactPerson: bContact.trim(),
        phone: bPhone.trim(),
        isHQ: bIsHQ
      });
      ue.success("Branch added.");
      setBName("");
      setBAddress("");
      setBContact("");
      setBPhone("");
      setBIsHQ(false);
      setShowForm(false);
    } catch {
      ue.error("Failed to add branch.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.branches_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-secondary" }),
        "Branches & Locations"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowForm((v) => !v),
          className: "military-button flex items-center gap-1.5 py-2 px-4 text-sm",
          "data-ocid": "admin.branches_add_button",
          children: [
            showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            showForm ? "Cancel" : "Add Branch"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "bg-muted/40 border border-border p-5 mb-6",
        "data-ocid": "admin.branches_add_form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4 text-sm uppercase tracking-wider", children: "New Branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdd, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "b-name", children: "Branch Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "b-name",
                    value: bName,
                    onChange: (e) => setBName(e.target.value),
                    placeholder: "Behala HQ",
                    "data-ocid": "admin.branch_name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "b-contact", children: "Contact Person" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "b-contact",
                    value: bContact,
                    onChange: (e) => setBContact(e.target.value),
                    "data-ocid": "admin.branch_contact_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "b-address", children: "Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "b-address",
                  value: bAddress,
                  onChange: (e) => setBAddress(e.target.value),
                  placeholder: "15/1, Raja Rammohan Roy Road, Kolkata",
                  "data-ocid": "admin.branch_address_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "b-phone", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "b-phone",
                    value: bPhone,
                    onChange: (e) => setBPhone(e.target.value),
                    "data-ocid": "admin.branch_phone_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    id: "b-hq",
                    checked: bIsHQ,
                    onCheckedChange: setBIsHQ,
                    "data-ocid": "admin.branch_hq_switch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "b-hq", children: "Headquarters" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: addBranch.isPending,
                className: "military-button",
                "data-ocid": "admin.branch_submit_button",
                children: addBranch.isPending ? "Adding…" : "Add Branch"
              }
            )
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["sk-a", "sk-b", "sk-c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full" }, k)) }) : branches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "admin.branches_empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-12 w-12" }),
        text: "No branches added yet."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "admin.branches_list", children: branches.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-3 border border-border p-4 bg-card",
        "data-ocid": `admin.branch_item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-secondary flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: b.name }),
              b.isHQ && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "military-badge text-xs py-0.5", children: "HQ" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: b.address }),
            b.contactPerson && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              b.contactPerson,
              " · ",
              b.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: async () => {
                if (!confirm("Delete this branch?")) return;
                await deleteBranch.mutateAsync(b.id);
                ue.success("Deleted.");
              },
              className: "p-2 hover:bg-destructive/10 text-destructive transition-smooth flex-shrink-0",
              "aria-label": "Delete branch",
              "data-ocid": `admin.branch_delete_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ]
      },
      String(b.id)
    )) })
  ] });
}
function GalleryTab() {
  const { data: items = [], isLoading } = useGalleryItems();
  const addItem = useAddGalleryItem();
  const deleteItem = useDeleteGalleryItem();
  const [showPhotoForm, setShowPhotoForm] = reactExports.useState(false);
  const [showVideoForm, setShowVideoForm] = reactExports.useState(false);
  const [gTitle, setGTitle] = reactExports.useState("");
  const [gFile, setGFile] = reactExports.useState(null);
  const [videoUrl, setVideoUrl] = reactExports.useState("");
  const [videoTitle, setVideoTitle] = reactExports.useState("");
  const [uploading, setUploading] = reactExports.useState(false);
  const handlePhotoAdd = async (e) => {
    e.preventDefault();
    if (!gTitle.trim() || !gFile) {
      ue.error("Title and photo are required.");
      return;
    }
    setUploading(true);
    try {
      const bytes = new Uint8Array(await gFile.arrayBuffer());
      const blob = ExternalBlob.fromBytes(bytes);
      await addItem.mutateAsync({
        title: gTitle.trim(),
        mediaType: MediaType.photo,
        blob,
        thumbnailBlob: null
      });
      ue.success("Photo uploaded.");
      setGTitle("");
      setGFile(null);
      setShowPhotoForm(false);
    } catch {
      ue.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  };
  const handleVideoAdd = async (e) => {
    e.preventDefault();
    if (!videoTitle.trim() || !videoUrl.trim()) {
      ue.error("Title and URL are required.");
      return;
    }
    try {
      const blob = ExternalBlob.fromURL(videoUrl.trim());
      await addItem.mutateAsync({
        title: videoTitle.trim(),
        mediaType: MediaType.video,
        blob,
        thumbnailBlob: null
      });
      ue.success("Video added.");
      setVideoTitle("");
      setVideoUrl("");
      setShowVideoForm(false);
    } catch {
      ue.error("Failed to add video.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.gallery_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-5 w-5 text-secondary" }),
        "Gallery Management"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setShowPhotoForm((v) => !v);
              setShowVideoForm(false);
            },
            className: "military-button flex items-center gap-1.5 py-2 px-3 text-sm",
            "data-ocid": "admin.gallery_add_photo_button",
            children: [
              showPhotoForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
              showPhotoForm ? "Cancel" : "Upload Photo"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setShowVideoForm((v) => !v);
              setShowPhotoForm(false);
            },
            className: "military-button-secondary flex items-center gap-1.5 py-2 px-3 text-sm",
            "data-ocid": "admin.gallery_add_video_button",
            children: [
              showVideoForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              showVideoForm ? "Cancel" : "Add Video"
            ]
          }
        )
      ] })
    ] }),
    showPhotoForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "bg-muted/40 border border-border p-5 mb-6",
        "data-ocid": "admin.gallery_photo_form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4 text-sm uppercase tracking-wider", children: "Upload Photo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePhotoAdd, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "g-title", children: "Title *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "g-title",
                  value: gTitle,
                  onChange: (e) => setGTitle(e.target.value),
                  placeholder: "Parade Day 2024",
                  "data-ocid": "admin.gallery_photo_title_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Photo File *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  UploadButton,
                  {
                    label: gFile ? `${gFile.name.slice(0, 20)}…` : "Choose Image",
                    accept: "image/*",
                    onFile: setGFile
                  }
                ),
                gFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setGFile(null),
                    className: "text-destructive text-xs hover:underline",
                    children: "Remove"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: uploading || addItem.isPending,
                className: "military-button",
                "data-ocid": "admin.gallery_photo_submit_button",
                children: uploading ? "Uploading…" : "Upload Photo"
              }
            )
          ] })
        ]
      }
    ),
    showVideoForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "bg-muted/40 border border-border p-5 mb-6",
        "data-ocid": "admin.gallery_video_form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4 text-sm uppercase tracking-wider", children: "Add Video" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleVideoAdd, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "v-title", children: "Title *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "v-title",
                  value: videoTitle,
                  onChange: (e) => setVideoTitle(e.target.value),
                  placeholder: "Annual Camp 2024 Highlights",
                  "data-ocid": "admin.gallery_video_title_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "v-url", children: "Video URL *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "v-url",
                  value: videoUrl,
                  onChange: (e) => setVideoUrl(e.target.value),
                  placeholder: "https://youtube.com/...",
                  "data-ocid": "admin.gallery_video_url_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: addItem.isPending,
                className: "military-button",
                "data-ocid": "admin.gallery_video_submit_button",
                children: addItem.isPending ? "Adding…" : "Add Video"
              }
            )
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f", "sk-g", "sk-h"].map(
      (k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square" }, k)
    ) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "admin.gallery_empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-12 w-12" }),
        text: "No gallery items uploaded yet."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
        "data-ocid": "admin.gallery_list",
        children: items.map((item, i) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative group border border-border overflow-hidden aspect-square bg-muted",
              "data-ocid": `admin.gallery_item.${i + 1}`,
              children: [
                item.mediaType === MediaType.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: ((_a = item.thumbnailBlob) == null ? void 0 : _a.getDirectURL()) ?? item.blob.getDirectURL(),
                    alt: item.title,
                    className: "h-full w-full object-cover"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full flex flex-col items-center justify-center bg-primary/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tent, { className: "h-8 w-8 text-primary opacity-60 mb-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground text-center px-2 line-clamp-2", children: item.title })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-smooth flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground text-xs font-medium text-center px-2 line-clamp-2", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: async () => {
                        if (!confirm("Delete this item?")) return;
                        await deleteItem.mutateAsync(item.id);
                        ue.success("Deleted.");
                      },
                      "aria-label": "Delete",
                      className: "h-8 w-8 bg-destructive flex items-center justify-center hover:bg-destructive/80 transition-smooth",
                      "data-ocid": `admin.gallery_delete_button.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive-foreground" })
                    }
                  )
                ] })
              ]
            },
            String(item.id)
          );
        })
      }
    )
  ] });
}
function ContactsTab() {
  const { data: submissions = [], isLoading } = useContactSubmissions();
  const markRead = useMarkContactRead();
  const unread = submissions.filter((s) => !s.isRead);
  const read = submissions.filter((s) => s.isRead);
  const sorted = [...unread, ...read];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.contacts_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-secondary" }),
        "Contact Messages"
      ] }),
      unread.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "military-badge", children: [
        unread.length,
        " unread"
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["sk-a", "sk-b", "sk-c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }, k)) }) : submissions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "admin.contacts_empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-12 w-12" }),
        text: "No messages received yet."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admin.contacts_list", children: sorted.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `border p-4 transition-smooth ${s.isRead ? "border-border bg-card opacity-70" : "border-primary bg-primary/5"}`,
        "data-ocid": `admin.contact_item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: s.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-2", children: s.email }),
              !s.isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 inline-block px-1.5 py-0.5 bg-primary text-primary-foreground text-xs font-bold uppercase", children: "New" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-shrink-0", children: s.isRead ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: async () => {
                  await markRead.mutateAsync(s.id);
                  ue.success("Marked as read.");
                },
                className: "text-xs text-primary hover:underline font-medium",
                "data-ocid": `admin.contact_mark_read_button.${i + 1}`,
                children: "Mark read"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: s.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: new Date(Number(s.submittedAt) / 1e6).toLocaleDateString(
            "en-IN",
            { day: "numeric", month: "short", year: "numeric" }
          ) })
        ]
      },
      String(s.id)
    )) })
  ] });
}
function AdmissionTab() {
  const { data: info, isLoading } = useAdmissionInfo();
  const updateAdmission = useUpdateAdmissionInfo();
  const [admFee, setAdmFee] = reactExports.useState("");
  const [monthFee, setMonthFee] = reactExports.useState("");
  const [docsText, setDocsText] = reactExports.useState("");
  const [initialised, setInitialised] = reactExports.useState(false);
  if (!initialised && info) {
    setAdmFee(info.fees.admission.toString());
    setMonthFee(info.fees.monthly.toString());
    setDocsText(info.documents.join("\n"));
    setInitialised(true);
  }
  const handleSave = async (e) => {
    e.preventDefault();
    const docs = docsText.split("\n").map((d) => d.trim()).filter(Boolean);
    const payload = {
      fees: {
        admission: BigInt(admFee || "0"),
        monthly: BigInt(monthFee || "0")
      },
      documents: docs
    };
    try {
      await updateAdmission.mutateAsync(payload);
      ue.success("Admission info saved.");
    } catch {
      ue.error("Failed to save admission info.");
    }
  };
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["sk-a", "sk-b", "sk-c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }, k)) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin.admission_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-secondary" }),
      "Admission Configuration"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-6 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground uppercase tracking-wider mb-3", children: "Fee Structure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-fee", children: "Admission Fee (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "adm-fee",
                type: "number",
                value: admFee,
                onChange: (e) => setAdmFee(e.target.value),
                placeholder: "500",
                min: "0",
                "data-ocid": "admin.admission_fee_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "month-fee", children: "Monthly Fee (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "month-fee",
                type: "number",
                value: monthFee,
                onChange: (e) => setMonthFee(e.target.value),
                placeholder: "200",
                min: "0",
                "data-ocid": "admin.monthly_fee_input"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-docs", children: "Required Documents (one per line)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "adm-docs",
            value: docsText,
            onChange: (e) => setDocsText(e.target.value),
            rows: 6,
            placeholder: "Aadhaar Card\nBirth Certificate\nSchool ID\nPassport Photo",
            "data-ocid": "admin.admission_docs_textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          disabled: updateAdmission.isPending,
          className: "military-button",
          "data-ocid": "admin.admission_save_button",
          children: updateAdmission.isPending ? "Saving…" : "Save Admission Info"
        }
      )
    ] })
  ] });
}
function AccessDenied() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 border-2 border-destructive mx-auto flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-10 w-10 text-destructive" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Access Denied" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "You need admin privileges to access this panel." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/admin/login",
        className: "military-button",
        "data-ocid": "admin.login_redirect_button",
        children: "Login as Admin"
      }
    )
  ] }) });
}
function AdminPage() {
  const { isAuthenticated, isAdmin, isInitializing, isCheckingAdmin, logout } = useAuth();
  const { admin, setAdminTab } = useAppStore();
  const activeTab = admin.activeTab;
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!isInitializing && !isCheckingAdmin && !isAuthenticated) {
      void navigate({ to: "/admin/login" });
    }
  }, [isAuthenticated, isInitializing, isCheckingAdmin, navigate]);
  if (isInitializing || isAuthenticated && isCheckingAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  }
  if (!isAuthenticated || !isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(AccessDenied, {});
  const tabContent = {
    overview: /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, { onNavigate: (tab) => setAdminTab(tab) }),
    org: /* @__PURE__ */ jsxRuntimeExports.jsx(OrgTab, {}),
    team: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamTab, {}),
    activities: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivitiesTab, {}),
    branches: /* @__PURE__ */ jsxRuntimeExports.jsx(BranchesTab, {}),
    gallery: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryTab, {}),
    contacts: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactsTab, {}),
    admission: /* @__PURE__ */ jsxRuntimeExports.jsx(AdmissionTab, {})
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background flex flex-col",
      "data-ocid": "admin.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-card border-b-2 border-primary sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base text-foreground tracking-tight", children: "Admin Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block text-xs text-muted-foreground border-l border-border pl-3", children: "Azad Hind United Squad" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                className: "text-xs text-muted-foreground hover:text-foreground transition-smooth hidden sm:block",
                "data-ocid": "admin.view_site_link",
                children: "View Site →"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: logout,
                className: "flex items-center gap-1.5 text-xs military-button-secondary py-1.5 px-3",
                "data-ocid": "admin.logout_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Logout" })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "aside",
            {
              className: "w-48 flex-shrink-0 hidden md:block",
              "data-ocid": "admin.sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-0.5 sticky top-20", children: TAB_LIST.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setAdminTab(tab.id),
                  className: `w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-left transition-smooth border-l-2 ${activeTab === tab.id ? "bg-primary/10 text-primary border-l-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-transparent"}`,
                  "data-ocid": `admin.${tab.id}_tab`,
                  children: [
                    tab.icon,
                    tab.label
                  ]
                },
                tab.id
              )) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mb-4 flex gap-1 flex-wrap w-full -mx-4 px-4 sm:-mx-6 sm:px-6", children: TAB_LIST.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setAdminTab(tab.id),
              className: `flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium transition-smooth ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
              "data-ocid": `admin.mobile_${tab.id}_tab`,
              children: [
                tab.icon,
                tab.label
              ]
            },
            tab.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.18 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border p-5 sm:p-6", children: tabContent[activeTab] })
            },
            activeTab
          ) })
        ] })
      ]
    }
  );
}
export {
  AdminPage as default
};
