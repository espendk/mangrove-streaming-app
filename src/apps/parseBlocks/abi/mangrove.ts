export const mangrove = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'governance',
        type: 'address',
      },
      { internalType: 'uint256', name: 'gasprice', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'gasmax',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'maker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Credit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'maker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Debit',
    type: 'event',
  },
  { anonymous: false, inputs: [], name: 'Kill', type: 'event' },
  {
    anonymous: false,
    inputs: [],
    name: 'NewMgv',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'taker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerWants',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerGives',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'mgvData',
        type: 'bytes32',
      },
    ],
    name: 'OfferFail',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'OfferRetract',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'taker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerWants',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerGives',
        type: 'uint256',
      },
    ],
    name: 'OfferSuccess',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'maker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'wants',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gives',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasprice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasreq',
        type: 'uint256',
      },
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prev',
        type: 'uint256',
      },
    ],
    name: 'OfferWrite',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'taker',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerGot',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerGave',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'penalty',
        type: 'uint256',
      },
    ],
    name: 'OrderComplete',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
    ],
    name: 'PosthookFail',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'value',
        type: 'bool',
      },
    ],
    name: 'SetActive',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SetDensity',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SetFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbound_tkn',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'offer_gasbase',
        type: 'uint256',
      },
    ],
    name: 'SetGasbase',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SetGasmax',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SetGasprice',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'SetGovernance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'SetMonitor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'bool', name: 'value', type: 'bool' },
    ],
    name: 'SetNotify',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'bool', name: 'value', type: 'bool' },
    ],
    name: 'SetUseOracle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'SetVault',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'density',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'offer_gasbase', type: 'uint256' },
    ],
    name: 'activate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      { internalType: 'address', name: '', type: 'address' },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowances',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'address', name: 'spender', type: 'address' },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
    ],
    name: 'best',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
    ],
    name: 'config',
    outputs: [
      { internalType: 'Global.t', name: '_global', type: 'uint256' },
      {
        internalType: 'Local.t',
        name: '_local',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
    ],
    name: 'configInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'monitor',
            type: 'address',
          },
          { internalType: 'bool', name: 'useOracle', type: 'bool' },
          {
            internalType: 'bool',
            name: 'notify',
            type: 'bool',
          },
          { internalType: 'uint256', name: 'gasprice', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'gasmax',
            type: 'uint256',
          },
          { internalType: 'bool', name: 'dead', type: 'bool' },
        ],
        internalType: 'struct GlobalStruct',
        name: 'global',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'bool', name: 'active', type: 'bool' },
          {
            internalType: 'uint256',
            name: 'fee',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'density', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'offer_gasbase',
            type: 'uint256',
          },
          { internalType: 'bool', name: 'lock', type: 'bool' },
          {
            internalType: 'uint256',
            name: 'best',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'last', type: 'uint256' },
        ],
        internalType: 'struct LocalStruct',
        name: 'local',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
    ],
    name: 'deactivate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'outbound_tkn',
            type: 'address',
          },
          { internalType: 'address', name: 'inbound_tkn', type: 'address' },
          {
            internalType: 'uint256',
            name: 'offerId',
            type: 'uint256',
          },
          { internalType: 'Offer.t', name: 'offer', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'wants',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'gives', type: 'uint256' },
          {
            internalType: 'OfferDetail.t',
            name: 'offerDetail',
            type: 'uint256',
          },
          { internalType: 'Global.t', name: 'global', type: 'uint256' },
          {
            internalType: 'Local.t',
            name: 'local',
            type: 'uint256',
          },
        ],
        internalType: 'struct MgvLib.SingleOrder',
        name: 'sor',
        type: 'tuple',
      },
      { internalType: 'address', name: 'taker', type: 'address' },
    ],
    name: 'flashloan',
    outputs: [{ internalType: 'uint256', name: 'gasused', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'maker', type: 'address' }],
    name: 'fund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governance',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'Offer.t', name: 'offer', type: 'uint256' }],
    name: 'isLive',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'kill',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
    ],
    name: 'locked',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'takerWants', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'takerGives',
        type: 'uint256',
      },
      { internalType: 'bool', name: 'fillWants', type: 'bool' },
    ],
    name: 'marketOrder',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'takerWants', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'takerGives',
        type: 'uint256',
      },
      { internalType: 'bool', name: 'fillWants', type: 'bool' },
      {
        internalType: 'address',
        name: 'taker',
        type: 'address',
      },
    ],
    name: 'marketOrderFor',
    outputs: [
      { internalType: 'uint256', name: 'takerGot', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'takerGave',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'bounty', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'wants', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'gives',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'gasreq', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'gasprice',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'pivotId', type: 'uint256' },
    ],
    name: 'newOffer',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'nonces',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'offerDetails',
    outputs: [{ internalType: 'OfferDetail.t', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'offerId', type: 'uint256' },
    ],
    name: 'offerInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'prev',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'next', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'wants',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'gives', type: 'uint256' },
        ],
        internalType: 'struct OfferStruct',
        name: 'offer',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'address', name: 'maker', type: 'address' },
          {
            internalType: 'uint256',
            name: 'gasreq',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'offer_gasbase', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'gasprice',
            type: 'uint256',
          },
        ],
        internalType: 'struct OfferDetailStruct',
        name: 'offerDetail',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'offers',
    outputs: [{ internalType: 'Offer.t', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'address', name: 'owner', type: 'address' },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'offerId', type: 'uint256' },
      {
        internalType: 'bool',
        name: 'deprovision',
        type: 'bool',
      },
    ],
    name: 'retractOffer',
    outputs: [{ internalType: 'uint256', name: 'provision', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'density', type: 'uint256' },
    ],
    name: 'setDensity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
    ],
    name: 'setFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'offer_gasbase', type: 'uint256' },
    ],
    name: 'setGasbase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gasmax', type: 'uint256' }],
    name: 'setGasmax',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gasprice', type: 'uint256' }],
    name: 'setGasprice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'governanceAddress', type: 'address' },
    ],
    name: 'setGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'monitor', type: 'address' }],
    name: 'setMonitor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: 'notify', type: 'bool' }],
    name: 'setNotify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: 'useOracle', type: 'bool' }],
    name: 'setUseOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'vaultAddress', type: 'address' },
    ],
    name: 'setVault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256[4][]', name: 'targets', type: 'uint256[4][]' },
      {
        internalType: 'bool',
        name: 'fillWants',
        type: 'bool',
      },
    ],
    name: 'snipes',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      { internalType: 'uint256', name: '', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256[4][]', name: 'targets', type: 'uint256[4][]' },
      {
        internalType: 'bool',
        name: 'fillWants',
        type: 'bool',
      },
      { internalType: 'address', name: 'taker', type: 'address' },
    ],
    name: 'snipesFor',
    outputs: [
      { internalType: 'uint256', name: 'successes', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'takerGot',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'takerGave', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'bounty',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'outbound_tkn', type: 'address' },
      {
        internalType: 'address',
        name: 'inbound_tkn',
        type: 'address',
      },
      { internalType: 'uint256', name: 'wants', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'gives',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'gasreq', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'gasprice',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'pivotId', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
    ],
    name: 'updateOffer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'withdraw',
    outputs: [{ internalType: 'bool', name: 'noRevert', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
