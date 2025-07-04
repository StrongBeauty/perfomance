# Performance

* First load speed of the site
* Smooth animation
* No browser blocking
* Page transition speed

## Performance is affected by

* Slow backend
* Slow rendering
* Bundle size
* Blocking CSS
* Number of redraws
* Code quality, applied algorithms

## Tools for finding problems

* Lighthouse
* React DevTools
* Tab Performance
* Tab Network


## Best practices for Performance

* Proper layout of components to avoid mutual rendering
* Avoiding O(n^2) complexity
* Using useMemo for complex calculations
* Using useMemo. useCallback, memo only where necessary
* Proper dependencies in useEffect to avoid unnecessary renderings
* Passing functions from outside instead of wrapping them in useMemo and useCallback
