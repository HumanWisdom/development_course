Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
'<Authorize>
Public Class ValuesController
    Inherits ApiController

    ' GET api/values
    Public Function GetValues() As IEnumerable(Of String)
        Dim x As New LibDll.MySqlConn
        Dim str As String
        str = x.GetValue("select faqid  from faq ")
        x.ConnectionClose()
        Return New String() {"value1", "value2"}

    End Function

    ' GET api/values/5
    Public Function GetValue(id As Integer) As String
        Return "value"
    End Function

    ' POST api/values
    Public Sub PostValue(<FromBody> value As String)

    End Sub

    ' PUT api/values/5
    Public Sub PutValue(id As Integer, <FromBody> value As String)

    End Sub

    ' DELETE api/values/5
    Public Sub DeleteValue(id As Integer)

    End Sub
End Class
