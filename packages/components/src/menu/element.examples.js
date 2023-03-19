export const metadata = {
  name: 'menu',
  elements: ['bp-menu']
};

export function example() {
  return /* html */`
    <script type="module">
      import '@blueprintui/components/include/menu.js';
      import '@blueprintui/components/include/card.js';
    </script>
    <div bp-layout="inline gap:lg">
      <bp-menu>
        <bp-menu-item>menu item</bp-menu-item>
        <bp-menu-item selected>item selected</bp-menu-item>
        <bp-menu-item disabled>item disabled</bp-menu-item>
        <bp-menu-item>menu item</bp-menu-item>
      </bp-menu>
      <bp-card>
        <bp-menu>
          <bp-menu-item>menu item</bp-menu-item>
          <bp-menu-item selected>item selected</bp-menu-item>
          <bp-menu-item disabled>item disabled</bp-menu-item>
          <bp-menu-item>menu item</bp-menu-item>
        </bp-menu>    
      </bp-card>
    </div>
  `;
}

export function badge() {
  return /* html */`
    <script type="module">
      import '@blueprintui/components/include/menu.js';
      import '@blueprintui/components/include/badge.js';
      import '@blueprintui/components/include/card.js';
    </script>
    <bp-card style="--width: fit-content">
      <bp-menu>
        <bp-menu-item>menu item <bp-badge status="accent">new</bp-badge></bp-menu-item>
        <bp-menu-item>menu item</bp-menu-item>
        <bp-menu-item>menu item</bp-menu-item>
        <bp-menu-item>menu item</bp-menu-item>
      </bp-menu>    
    </bp-card>
  `;
}

export function links() {
  return /* html */`
    <script type="module">
      import '@blueprintui/components/include/menu.js';
    </script>
    <bp-menu>
      <bp-menu-item><a href="#">menu item</a></bp-menu-item>
      <bp-menu-item selected><a href="#">menu item</a></bp-menu-item>
      <bp-menu-item disabled><a href="#">menu item</a></bp-menu-item>
      <bp-menu-item><a href="#">menu item</a></bp-menu-item>
    </bp-menu>
  `;
}

export function dropdown() {
  return /* html */`
    <script type="module">
      import '@blueprintui/components/include/menu.js';
      import '@blueprintui/components/include/button.js';
      import '@blueprintui/components/include/divider.js';
      import '@blueprintui/components/include/dropdown.js';
    </script>
    <div bp-layout="block center" style="height: 100%">
      <bp-button id="menu-dropdown">Open Dropdown</bp-button>
      <bp-dropdown hidden anchor="menu-dropdown" trigger="menu-dropdown">
        <bp-menu>
          <bp-menu-item>Account</bp-menu-item>
          <bp-menu-item>Reports</bp-menu-item>
          <bp-menu-item>Profile Settings</bp-menu-item>
          <bp-divider></bp-divider>
          <bp-menu-item>Logout <bp-icon shape="logout" style="margin-left: auto"></bp-icon></bp-menu-item>
        </bp-menu>
      </bp-dropdown>
    </div>
    <script type="module">
      import '@blueprintui/components/include/dropdown.js';
      import '@blueprintui/components/include/menu.js';
      import '@blueprintui/components/include/button.js';
      import '@blueprintui/components/include/divider.js';
      import '@blueprintui/icons/shapes/logout.js';

      const dropdown = document.querySelector('bp-dropdown[anchor="menu-dropdown"]');
      dropdown.addEventListener('close', () => dropdown.hidden = true);
      dropdown.addEventListener('open', () => dropdown.hidden = false);
    </script>
  `;
}
