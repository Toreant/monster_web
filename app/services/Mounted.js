/**
 * Created by apache on 15-11-19.
 */
var isMounted = (component) => {
    // exceptions for flow control :(
    try {
        React.findDOMNode(component);
        return true;
    } catch (e) {
        // Error: Invariant Violation: Component (with keys: props,context,state,refs,_reactInternalInstance) contains `render` method but is not mounted in the DOM
        return false;
    }
};

export default isMounted;