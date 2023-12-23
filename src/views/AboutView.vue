<template>
  <div class="about">
    <h1>About</h1>
    <h2>About AtomisticToolbox</h2>
    <p>
      The Atomistic Toolbox project is an open source initiative that aims to provide a
      comprehensive collection of important parameters and reference values for spectroscopy and
      theory.
    </p>
    <p>
      Currently, the project is in its early stages and we are working on the first implementation
      of the database. The database will be made available as a web application and is written in
      JavaScript using the
      <a href="https://vuejs.org/" target="_blank" rel="opener"
        ><i class="fab fa-vuejs"></i> Vue 3</a
      >
      framework.
    </p>

    <h2>How to Contribute</h2>
    <p>
      We welcome contributions from everyone. If you're interested in contributing, you can start by
      checking out our open issues on
      <a href="https://github.com/Anselmoo/atomistic-toolbox" target="_blank" rel="opener"
        ><i class="fab fa-github"></i> atomistic-toolbox</a
      >. If you find an issue you'd like to work on, feel free to fork our repository and submit a
      pull request when you're ready.
    </p>
    <p class="note">
      <a href="https://github.com/Anselmoo/CONTRIBUTING.md" target="_blank" rel="opener"
        >For more detailed instructions, please refer to our contribution guidelines</a
      >.
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* Add this line */
    align-items: left;
    justify-content: center; /* Add this line if you want to center the content vertically */
  }
}

.about {
  padding: 0 10px;
}

.note {
  font-style: italic;
  color: #42b983;
}
</style>
