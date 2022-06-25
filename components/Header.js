import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div>
      Decentralized Truly Fair Lottery!
      <ConnectButton moralisAuth={false} />
      {/* moralisAuth to say that we ain't connecting to a centralized server */}
    </div>
  );
}
