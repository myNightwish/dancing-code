import BreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue';

/* istanbul ignore next */
BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
