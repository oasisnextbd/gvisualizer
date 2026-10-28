# gvisualizer

Heat transfer for ChE L3T1 (BUET), learned by doing. Each topic is a short hands-on lab: you drag, sketch and fit things on a live diagram, and the equations build up from what you do. Checkpoint questions appear only at the key ideas, such as the assumptions. You get 3 chances, then the lab shows the answer and moves on.

## Modules

- **[Boundary Layer Lab](boundary-layer/)**: 12 scenes in three chapters, from probing a real boundary layer to δ/x = 4.64/√Re_x and the thermal layer. Notation follows Holman, *Heat Transfer*, Chapter 5.
  - *See it*: probe the flow along a plate, then sketch the velocity profile and compare it with the real one.
  - *Build it*: slow the fluid in a dx·dy box to discover continuity, push parcels through its faces to see what carries x-momentum, place the pressure and shear forces, then drag each assumption onto the term it removes. A slider then proves why the thin-layer assumption is safe.
  - *Solve it*: fit the cubic profile on a 2-D pad, check where the curvature rule comes from, sweep out the 39/280 area, solve for δ, and change the Prandtl number to watch the thermal layer.
- **[Fluid Sandbox](boundary-layer/sandbox/)**: a live lattice-Boltzmann flow solver running on your GPU (WebGL2). Draw walls and heaters, probe the plate's boundary layer against Blasius, and watch a cylinder shed a vortex street.

No install needed. Open the pages in a browser, or use the GitHub Pages link: https://oasisnextbd.github.io/gvisualizer/
