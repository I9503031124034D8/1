var
S
=
`
£INDEX
DATA BASE TABLE 1
: PK1
£INDEX METH
S1()
£PH
DATA BASE TABLE 2
: PK2, F1, F2, F3
£PH
DATA BASE TABLE 3
: PK3, BL, F1
£PH METH
I1(PK1, K, V)
I2(PK3, PK2, BL)
S1(PK1, K)
S2(PK3, )
U1(PK1, K, V)
U2()
`
import
{
_1
,
_6
,
_8
,
_10
,
_12
,
_13
,
_14
,
_15
,
_16
,
_17
,
_19
,
_20
,
_22
,
_23
,
_28
,
_29
,
_30
,
_31
,
_32
,
_33
,
_34
,
_35
,
_49
,
_50
}
from
'i9503031124034-1'
export default
(
___2
) =>
{
var
____1
=
_16
(
[
]
)
_14
(
(
) =>
{
__1
(
____1
)
}
,
[
]
)
return _49
(
{
}
,
_49
(
{
style
:
{
backgroundColor
:
'rgb(251, 251, 251)'
}
}
,
_50
(
{
onPress
:
(
) =>
{
__2
(
____1
)
}
}
,
_28
(
)
)
)
,
__3
(
// {
// __R1
// :
// ____1
// [
// 0
// ]
// }
)
)
}
// PROP(OBJECT) IS NOT MUTABLE
// PROPS(ANY) IS MUTABLE
var
__1
=
(
__P
) =>
{
__P
[
1
]
(
_10
(
/* CHANCE */
`SELECT * FROM __T1`
)
)
}
,
__2
=
(
__P
) =>
{
_8
(
`INSERT INTO __T1 DEFAULT VALUES`
)
__1
(
__P
)
}
,
__3
=
_15
(
(
{
___1
}
) =>
_49
(
{
__1
:
___1
,
__2
:
(
____P1
,
____P2
) =>
_20
(
{
}
,
____P1
.
PK
)
}
)
)