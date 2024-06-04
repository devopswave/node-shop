
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NhdGFsb2cvcGFnZXMvZnJvbnRTdG9yZS9hbGwvU2VhcmNoQm94LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NhdGFsb2cvcGFnZXMvZnJvbnRTdG9yZS9hbGwvU2VhcmNoQm94LmpzeA==',
      sortOrder: 5,
      component: require('/my-app/packages/evershop/src/modules/catalog/pages/frontStore/all/SearchBox.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NoZWNrb3V0L3BhZ2VzL2Zyb250U3RvcmUvYWxsL01pbmlDYXJ0LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NoZWNrb3V0L3BhZ2VzL2Zyb250U3RvcmUvYWxsL01pbmlDYXJ0LmpzeA==',
      sortOrder: 10,
      component: require('/my-app/packages/evershop/src/modules/checkout/pages/frontStore/all/MiniCart.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Nb2JpbGVNZW51LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Nb2JpbGVNZW51LmpzeA==',
      sortOrder: 50,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/MobileMenu.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2N1c3RvbWVyL3BhZ2VzL2Zyb250U3RvcmUvYWxsL1VzZXJJY29uLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2N1c3RvbWVyL3BhZ2VzL2Zyb250U3RvcmUvYWxsL1VzZXJJY29uLmpzeA==',
      sortOrder: 30,
      component: require('/my-app/packages/evershop/src/modules/customer/pages/frontStore/all/UserIcon.jsx')
    }
  },
  content: {
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NoZWNrb3V0L3BhZ2VzL2Zyb250U3RvcmUvY2FydC9TaG9wcGluZ0NhcnQuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NoZWNrb3V0L3BhZ2VzL2Zyb250U3RvcmUvY2FydC9TaG9wcGluZ0NhcnQuanN4',
      sortOrder: 1,
      component: require('/my-app/packages/evershop/src/modules/checkout/pages/frontStore/cart/ShoppingCart.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9CcmVhZGNydW1iLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9CcmVhZGNydW1iLmpzeA==',
      sortOrder: 0,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/Breadcrumb.jsx')
    }
  },
  shoppingCartRight: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NoZWNrb3V0L3BhZ2VzL2Zyb250U3RvcmUvY2FydC9TdW1tYXJ5LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NoZWNrb3V0L3BhZ2VzL2Zyb250U3RvcmUvY2FydC9TdW1tYXJ5LmpzeA==',
      sortOrder: 10,
      component: require('/my-app/packages/evershop/src/modules/checkout/pages/frontStore/cart/Summary.jsx')
    }
  },
  footer: {
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Gb290ZXIuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Gb290ZXIuanN4',
      sortOrder: 10,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/Footer.jsx')
    }
  },
  head: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9IZWFkVGFncy5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9IZWFkVGFncy5qc3g=',
      sortOrder: 5,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/HeadTags.jsx')
    }
  },
  body: {
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9MYXlvdXQuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9MYXlvdXQuanN4',
      sortOrder: 1,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/Layout.jsx')
    },
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Ob3RpZmljYXRpb24uanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Ob3RpZmljYXRpb24uanN4',
      sortOrder: 10,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/Notification.jsx')
    }
  },
  header: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Mb2dvLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9Mb2dvLmpzeA==',
      sortOrder: 1,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/Logo.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9NZW51LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9mcm9udFN0b3JlL2FsbC9NZW51LmpzeA==',
      sortOrder: 5,
      component: require('/my-app/packages/evershop/src/modules/cms/pages/frontStore/all/Menu.jsx')
    }
  },
  shoppingCartLeft: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3Byb21vdGlvbi9wYWdlcy9mcm9udFN0b3JlL2NhcnQvQ291cG9uLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3Byb21vdGlvbi9wYWdlcy9mcm9udFN0b3JlL2NhcnQvQ291cG9uLmpzeA==',
      sortOrder: 20,
      component: require('/my-app/packages/evershop/src/modules/promotion/pages/frontStore/cart/Coupon.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );