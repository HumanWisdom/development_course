Imports System.Net
Imports System.Web.Http

Namespace Controllers
    '<EnableCors("*", "*", "*")>
    <RoutePrefix("api/Login")>
    Public Class LoginController
        Inherits ApiController

        Public Function GetValues() As IEnumerable(Of String)
            Dim x As New LibDll.MySqlConn
            Dim str As String
            str = x.GetValue("select faqid  from faq ")
            x.ConnectionClose()
            Return New String() {"value1", "value2"}

        End Function

        <HttpGet>
        Public Function GetValue(email As String, pwd As String) As Int32
            Dim x As New LibDll.MySqlConn
            Dim mId As String = ""
            'ValidLogin = x.GetValue("select count(*) from mindgames_users where android='1' and email = '" & uid.Replace("'", "''").Trim & "' and password = '" & pwd.Replace("'", "''").Trim & "'")
            mId = x.GetValue("select userid from users where email = '" & email.Replace("'", "''").Trim & "' and password = '" & pwd.Replace("'", "''").Trim & "'")
            If mId = "" Then
                GetValue = 0
            Else
                GetValue = mId
            End If
            x.ConnectionClose()
        End Function
        <HttpPost>
        <Route("~/api/register")>
        Public Function Register(email As String, pwd As String) As String
            Register = "Success"
            Dim mOrderId As Int32 = 0
            Dim qry As String = ""
            qry = "select userid from users where email = '" & email.Replace("'", "''").Trim & "'"
            Dim x As New LibDll.MySqlConn
            Dim mid As String = x.GetValue(qry)
            If mid = "" Then
                qry = " insert into users ( email, password ) values ('" & email.Trim.Replace("'", "''") & "','" & pwd.Trim.Replace("'", "''") & "'); select @@identity; "
                mid = x.InsertRecord(qry)
                If mid = "0" Or mid = "" Then
                    Register = "Fail"
                Else
                    Dim e As New LibDll.Email
                    e.SendEmail("test", "deepak.s@akoninfotech.com", "sfklj sfd")
                    ' activation account url = ulr/email/encryptedkey
                End If
            Else
                Register = "Email already exists"
            End If

            x.ConnectionClose()
        End Function
        <HttpPost>
        <Route("~/api/VerifyEmail")>
        Public Function Register_1(email As String, key As String) As String
            Register_1 = "Success"
            Dim mOrderId As Int32 = 0
            Dim qry As String = ""
            qry = "select userid from users where email = '" & email.Replace("'", "''").Trim & "'"
            Dim x As New LibDll.MySqlConn
            Dim mid As String = x.GetValue(qry)
            If mid = "" Then
                Register_1 = "Invalid URL"
            Else
                If email = CommonFns.DecryptStr(key, mid) Then
                    qry = "update users set VerifiedEmail = '1' where userid = '" & mid & "'"
                    x.UpdateRecord(qry)
                Else
                    Register_1 = "Fail"
                End If
            End If
            x.ConnectionClose()
        End Function

        <HttpGet>
        <Route("~/api/encrypt")>
        Public Function encrypt(email As String, pwd As String) As String
            encrypt = CommonFns.EncryptStr(email, pwd)
        End Function
        <HttpGet>
        <Route("~/api/decrypt")>
        Public Function decrypt(EncryptedKey As String, pwd As String) As String
            decrypt = CommonFns.DecryptStr(EncryptedKey, pwd)
        End Function
    End Class
End Namespace