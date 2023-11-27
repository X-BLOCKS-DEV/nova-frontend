const Footer = () => {
  return (
    <div className="relative bottom-0">
      <hr />
      <div className="p-4 text-sm text-slate-500">
        <div className="flex m-auto">
          <div className="flex-none">
            <p>何か不具合が起きた際には以下までご連絡ください</p>
            <p>maintenance@b-c-lab.co.jp</p>
          </div>
          <div className="grow" />
          <div className="flex-none">
            <p>© 2023 B・C LAB Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
