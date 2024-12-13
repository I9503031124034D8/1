/* NUMBERING RULES
IMPORT AS 
CLOSE TO USE
CALL DEPTH (EXCHANGE)
MOVE PARAMETER USE
*/
/* TYPING RULES
IMPORT AS
CLOSE TO USE
CALL DEPTH (EXCHANGE)
NO PARAMETER
*/
import
*
as
________1
from
'expo-sqlite/kv-store'
import
*
as
________2
from
'expo-router'
import
*
as
________3
from
'expo-status-bar'
import
*
as
________4
from
'react'
import
*
as
________5
from
'react-native'
import
*
as
________6
from
'react-native-svg'
const
________7
=
________3
.
StatusBar
,
________8
=
________4
.
createElement
,
________9
=
(
) =>
________8
(
________7
,
{
hidden
:
true
// variables ^ 64
,
style
:
'auto'
}
)
,
________10
=
________4
.
memo
,
________11
=
________10
(
________9
)
,
________12
=
________4
.
createElement
,
________13
=
(
) =>
________12
(
________11
)
,
________14
=
________4
.
createElement
,
________15
=
________5
.
View
,
________16
=
(
) =>
________14
(
________15
,
{
onLayout
:
(
) =>
{
// from stor
}
}
,
________13
(
)
)
,
________17
=
________4
.
memo
,
________18
=
________17
(
________16
)
,
________19
=
________4
.
createElement
,
________20
=
(
) =>
________19
(
________18
)
,
________21
=
(
) =>
________20
(
)
export
default
________21