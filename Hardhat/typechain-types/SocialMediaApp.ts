/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace SocialMediaApp {
  export type CommentStruct = {
    commentId: BigNumberish;
    relatedPostId: BigNumberish;
    comment: string;
    commentDate: string;
    commentedUser: AddressLike;
  };

  export type CommentStructOutput = [
    commentId: bigint,
    relatedPostId: bigint,
    comment: string,
    commentDate: string,
    commentedUser: string
  ] & {
    commentId: bigint;
    relatedPostId: bigint;
    comment: string;
    commentDate: string;
    commentedUser: string;
  };

  export type PostStruct = {
    postId: BigNumberish;
    postImage: string;
    caption: string;
    tags: string;
    date: string;
    user: AddressLike;
  };

  export type PostStructOutput = [
    postId: bigint,
    postImage: string,
    caption: string,
    tags: string,
    date: string,
    user: string
  ] & {
    postId: bigint;
    postImage: string;
    caption: string;
    tags: string;
    date: string;
    user: string;
  };
}

export interface SocialMediaAppInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getComments"
      | "getPost"
      | "getPosts"
      | "uploadComment"
      | "uploadPost"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "UploadComment" | "UploadPost"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getComments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPost",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPosts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uploadComment",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "uploadPost",
    values: [string, string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getComments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPosts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uploadComment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uploadPost", data: BytesLike): Result;
}

export namespace UploadCommentEvent {
  export type InputTuple = [
    commentId: BigNumberish,
    relatedPostId: BigNumberish,
    comment: string,
    commentDate: string,
    commentedUser: AddressLike
  ];
  export type OutputTuple = [
    commentId: bigint,
    relatedPostId: bigint,
    comment: string,
    commentDate: string,
    commentedUser: string
  ];
  export interface OutputObject {
    commentId: bigint;
    relatedPostId: bigint;
    comment: string;
    commentDate: string;
    commentedUser: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UploadPostEvent {
  export type InputTuple = [
    postId: BigNumberish,
    postImage: string,
    caption: string,
    tags: string,
    date: string,
    user: AddressLike
  ];
  export type OutputTuple = [
    postId: bigint,
    postImage: string,
    caption: string,
    tags: string,
    date: string,
    user: string
  ];
  export interface OutputObject {
    postId: bigint;
    postImage: string;
    caption: string;
    tags: string;
    date: string;
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SocialMediaApp extends BaseContract {
  connect(runner?: ContractRunner | null): SocialMediaApp;
  waitForDeployment(): Promise<this>;

  interface: SocialMediaAppInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getComments: TypedContractMethod<
    [],
    [SocialMediaApp.CommentStructOutput[]],
    "view"
  >;

  getPost: TypedContractMethod<
    [id: BigNumberish],
    [SocialMediaApp.PostStructOutput],
    "view"
  >;

  getPosts: TypedContractMethod<
    [],
    [SocialMediaApp.PostStructOutput[]],
    "view"
  >;

  uploadComment: TypedContractMethod<
    [postId: BigNumberish, postComment: string, date: string],
    [void],
    "nonpayable"
  >;

  uploadPost: TypedContractMethod<
    [postImage: string, caption: string, tags: string, postDate: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getComments"
  ): TypedContractMethod<[], [SocialMediaApp.CommentStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getPost"
  ): TypedContractMethod<
    [id: BigNumberish],
    [SocialMediaApp.PostStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPosts"
  ): TypedContractMethod<[], [SocialMediaApp.PostStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "uploadComment"
  ): TypedContractMethod<
    [postId: BigNumberish, postComment: string, date: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uploadPost"
  ): TypedContractMethod<
    [postImage: string, caption: string, tags: string, postDate: string],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "UploadComment"
  ): TypedContractEvent<
    UploadCommentEvent.InputTuple,
    UploadCommentEvent.OutputTuple,
    UploadCommentEvent.OutputObject
  >;
  getEvent(
    key: "UploadPost"
  ): TypedContractEvent<
    UploadPostEvent.InputTuple,
    UploadPostEvent.OutputTuple,
    UploadPostEvent.OutputObject
  >;

  filters: {
    "UploadComment(uint256,uint256,string,string,address)": TypedContractEvent<
      UploadCommentEvent.InputTuple,
      UploadCommentEvent.OutputTuple,
      UploadCommentEvent.OutputObject
    >;
    UploadComment: TypedContractEvent<
      UploadCommentEvent.InputTuple,
      UploadCommentEvent.OutputTuple,
      UploadCommentEvent.OutputObject
    >;

    "UploadPost(uint256,string,string,string,string,address)": TypedContractEvent<
      UploadPostEvent.InputTuple,
      UploadPostEvent.OutputTuple,
      UploadPostEvent.OutputObject
    >;
    UploadPost: TypedContractEvent<
      UploadPostEvent.InputTuple,
      UploadPostEvent.OutputTuple,
      UploadPostEvent.OutputObject
    >;
  };
}
