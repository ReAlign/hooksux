// 数据 Provider 组合器
const ProvidersComposer = (props: any) => {
  const {
    r = {},
  } = props;
  const {
    React,
    createElement,
  } = r;
  return (
    props.providers.reduceRight((children: any, Parent: any) => (
      <Parent>{children}</Parent>
    ), props.children)
  );
};

const createProvider = (r: any, providers: any) => (props: any) => {
  const {
    React,
    createElement,
  } = r;
  return (
    <ProvidersComposer r={r} providers={providers}>
      {props.children}
    </ProvidersComposer>
  );
};

export default createProvider;
