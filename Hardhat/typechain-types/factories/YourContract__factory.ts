/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { YourContract, YourContractInterface } from "../YourContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "greetingSetter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newGreeting",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "premium",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "GreetingChange",
    type: "event",
  },
  {
    inputs: [],
    name: "greeting",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "premium",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newGreeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userGreetingCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e0604052601c60a09081527f4275696c64696e6720556e73746f707061626c6520417070732121210000000060c05260009061003c9082610127565b506001805460ff19169055600060025534801561005857600080fd5b50604051610a4f380380610a4f833981016040819052610077916101e6565b6001600160a01b0316608052610216565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806100b257607f821691505b6020821081036100d257634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561012257600081815260208120601f850160051c810160208610156100ff5750805b601f850160051c820191505b8181101561011e5782815560010161010b565b5050505b505050565b81516001600160401b0381111561014057610140610088565b6101548161014e845461009e565b846100d8565b602080601f83116001811461018957600084156101715750858301515b600019600386901b1c1916600185901b17855561011e565b600085815260208120601f198616915b828110156101b857888601518255948401946001909101908401610199565b50858210156101d65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156101f857600080fd5b81516001600160a01b038116811461020f57600080fd5b9392505050565b60805161081161023e6000396000818160a9015281816101a3015261020901526108116000f3fe6080604052600436106100745760003560e01c8063a41368621161004e578063a41368621461010c578063cea49c3c1461011f578063e0a73a931461014c578063ef690cc01461017657600080fd5b80633ccfd60b146100805780638da5cb5b1461009757806397feba9d146100e857600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b50610095610198565b005b3480156100a357600080fd5b506100cb7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100f457600080fd5b506100fe60025481565b6040519081526020016100df565b61009561011a3660046104ae565b6102c2565b34801561012b57600080fd5b506100fe61013a36600461055f565b60036020526000908152604090205481565b34801561015857600080fd5b506001546101669060ff1681565b60405190151581526020016100df565b34801561018257600080fd5b5061018b61039d565b6040516100df91906105d5565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102055760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329027bbb732b960991b60448201526064015b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03164760405160006040518083038185875af1925050503d8060008114610272576040519150601f19603f3d011682016040523d82523d6000602084013e610277565b606091505b50509050806102bf5760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b60448201526064016101fc565b50565b6102e56040518060600160405280602181526020016107bb60219139823361042b565b60006102f18282610670565b506001600260008282546103059190610730565b909155505033600090815260036020526040812080546001929061032a908490610730565b90915550503415610346576001805460ff191681179055610351565b6001805460ff191690555b336001600160a01b03167f94cbd7e04dca26a7667654f6448b2ca0a40fec602118dc5fd8c82b9cf3c645ad8260003411600060405161039293929190610757565b60405180910390a250565b600080546103aa906105e8565b80601f01602080910402602001604051908101604052809291908181526020018280546103d6906105e8565b80156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b505050505081565b6104728383836040516024016104439392919061077c565b60408051601f198184030181529190526020810180516001600160e01b03166395ed019560e01b179052610477565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156104c057600080fd5b813567ffffffffffffffff808211156104d857600080fd5b818401915084601f8301126104ec57600080fd5b8135818111156104fe576104fe610498565b604051601f8201601f19908116603f0116810190838211818310171561052657610526610498565b8160405282815287602084870101111561053f57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020828403121561057157600080fd5b81356001600160a01b038116811461058857600080fd5b9392505050565b6000815180845260005b818110156105b557602081850181015186830182015201610599565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610588602083018461058f565b600181811c908216806105fc57607f821691505b60208210810361061c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561047257600081815260208120601f850160051c810160208610156106495750805b601f850160051c820191505b8181101561066857828155600101610655565b505050505050565b815167ffffffffffffffff81111561068a5761068a610498565b61069e8161069884546105e8565b84610622565b602080601f8311600181146106d357600084156106bb5750858301515b600019600386901b1c1916600185901b178555610668565b600085815260208120601f198616915b82811015610702578886015182559484019460019091019084016106e3565b50858210156107205787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561075157634e487b7160e01b600052601160045260246000fd5b92915050565b60608152600061076a606083018661058f565b93151560208301525060400152919050565b60608152600061078f606083018661058f565b82810360208401526107a1818661058f565b91505060018060a01b038316604083015294935050505056fe53657474696e67206e6577206772656574696e6720272573272066726f6d202573a26469706673582212200f630ef3a658707d4da7c52f863fb37c43e9dce0e9623700feeab0d0d2a0d2e864736f6c63430008110033";

type YourContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YourContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YourContract__factory extends ContractFactory {
  constructor(...args: YourContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YourContract> {
    return super.deploy(_owner, overrides || {}) as Promise<YourContract>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): YourContract {
    return super.attach(address) as YourContract;
  }
  override connect(signer: Signer): YourContract__factory {
    return super.connect(signer) as YourContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YourContractInterface {
    return new utils.Interface(_abi) as YourContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YourContract {
    return new Contract(address, _abi, signerOrProvider) as YourContract;
  }
}