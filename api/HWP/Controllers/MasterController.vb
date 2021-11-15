Imports System.Net
Imports System.Web.Http
Imports System.Net.Http
Imports System.Threading.Tasks

Namespace Controllers
    Public Class MasterController
        Inherits ApiController


        <HttpGet>
        <Route("~/api/Countries")>
        Public Function GetCountries() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT  `CountryID`, `Country`, `Currency`, `Symbol`, `DigitalCode`, `ISOCode` FROM `countries` order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .CID = row(0),
            Key .Country = row(1).ToString(),
            Key .Cur = row(2).ToString(),
            Key .Symbol = row(3).ToString(),
            Key .DigCode = row(4).ToString(),
            Key .IsoCode = row(5).ToString()
            })
            x.ConnectionClose()
            Return data
        End Function

        <HttpPost>
        <Route("~/api/UserLogin/{UserId}")>
        Public Function UserLogin(UserId As Int32) As Int32
            UserLogin = 0
            Dim x As New LibDll.DataConn
            Dim qry As String = ""
            qry = "INSERT INTO `UserLogin`( `USERID`) VALUES ( '" & UserId & "' ) ; select @@identity; "
            UserLogin = x.InsertRecord(qry)
            x.ConnectionClose()
        End Function
        <HttpGet>
        <Route("~/api/Roles")>
        Public Function GetUserRoles() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `RoleId`, `Role` FROM `role` where RoleId > 1 order by 2,1 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .RoleId = row(0),
                Key .Role = row(1).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function

        <HttpPost>
        <Route("~/api/AddQtype")>
        Public Function QtypeAdd(qt As qtype) As Int32
            Dim q As New qtype
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteQtype/{qid}")>
        Public Function QtypeDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Question Type ID")
            Dim q As New qtype
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Qtypes")>
        Public Function GetQtypes() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("select QuesTypeID , QType from questype order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ID = row("QuesTypeID"),
                Key .QType = row("QType").ToString()
                })
            x.ConnectionClose()
            Return data
        End Function

        '----------------------------------FAQ SECTIONS ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddFaqSection")>
        Public Function FaqSectionAdd(fs As FaqSections) As Int32
            Dim f As New FaqSections
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteFaqSection/{fsid}")>
        Public Function FaqSectionDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Faq Section ID")
            Dim q As New FaqSections
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/FaqSections")>
        Public Function GetFaqSections() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `FaqSectionID`, `FaqSection` FROM `faqsections` order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ID = row(0),
                Key .FaqSection = row(1).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function

        '----------------------------------END FAQ SECTIONS ------------------------------------------------------

        '----------------------------------FAQ  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddFaq")>
        Public Function FaqAdd(fs As Faqs) As Int32
            Dim f As New Faqs
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteFaq/{fsid}")>
        Public Function FaqDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Faq Section ID")
            Dim q As New Faqs
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Faqs")>
        Public Function GetFaqs() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `FaqID`, `Question`, `Answer`, `SiteSectID` FROM `faq` order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ID = row(0),
                Key .Que = row(1).ToString(),
                Key .Ans = row(2).ToString(),
                Key .SiteSectID = row(3).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END FAQ  ------------------------------------------------------


        '----------------------------------Sections  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddSection")>
        Public Function SectionAdd(fs As Sections) As Int32
            Dim f As New Sections
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteSection/{fsid}")>
        Public Function SectionDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Section ID")
            Dim q As New Sections
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Sections")>
        Public Function GetSections() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `SectionID`, `ProgramID`, `SectionNumber`, `SectionName` FROM `sections` order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .SectID = row(0),
                Key .ProgramID = row(1).ToString(),
                Key .SectNo = row(2).ToString(),
                Key .SectName = row(3).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END Section  ------------------------------------------------------


        '----------------------------------Sub-Sections  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddSubSection")>
        Public Function SubSectionAdd(fs As SubSections) As Int32
            Dim f As New SubSections
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteSubSection/{fsid}")>
        Public Function SubSectionDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Subsection ID")
            Dim q As New SubSections
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/SubSections")>
        Public Function GetSubSections() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `SubSectionID`, `SectionID`, `SubSectionNo`, `SubSectName` FROM `subsection`  order by 4 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .SubSectID = row(0),
                Key .SectID = row(1).ToString(),
                Key .SubSectNo = row(2).ToString(),
                Key .SubSectName = row(3).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END Sub-Section  ------------------------------------------------------


        '----------------------------------Program start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddProgram")>
        Public Function ProgramAdd(qt As Program) As Int32
            Dim q As New Program
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteProgram/{qid}")>
        Public Function ProgramDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Program ID")
            Dim q As New Program
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Programs")>
        Public Function GetPrograms() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("select programID , Name from program order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ID = row(0),
                Key .Program = row(1).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function

        '----------------------------------Program End ------------------------------------------------------


        '----------------------------------Rate start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddRate")>
        Public Function RateAdd(qt As Rate) As Int32
            Dim q As New Rate
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteRate/{qid}")>
        Public Function RateDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Rate ID")
            Dim q As New Rate
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Rates")>
        Public Function GetRates() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `RateID`, `ProgramID`, `CountryID`, `Monthly`, `Annual`, `Current` FROM `rate`  order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .RateID = row(0),
                Key .ProgID = row(1),
                Key .CountryID = row(2).ToString(),
                Key .Monthly = row(3).ToString(),
                Key .Annual = row(4).ToString(),
                Key .Current = row(5).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------Rate End ------------------------------------------------------

        '----------------------------------Reflection start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddReflection")>
        Public Function ReflectionAdd(qt As Reflections) As Int32
            Dim q As New Reflections
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteReflection/{qid}")>
        Public Function ReflectionDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Reflection ID")
            Dim q As New Reflections
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Reflections")>
        Public Function GetReflections() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `ReflectionID`, `ProgramID`, `SectionID`, `Question` FROM `Reflections`  order by Question ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ReflectionID = row(0),
                Key .ProgramID = row(1),
                Key .SectionId = row(2).ToString(),
                Key .Question = row(3).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------Reflection End ------------------------------------------------------

        '----------------------------------user Reflection start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddUserReflection")>
        Public Function UserReflectionAdd(qt As UserReflections) As Int32
            Dim q As New UserReflections
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteUserReflection/{qid}")>
        Public Function UserReflectionDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid UserReflection ID")
            Dim q As New UserReflections
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/UserReflections")>
        Public Function GetUserReflections() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `UserReflectionID`, `SubscriberID`, `Response` FROM `UserReflections`  order by 1,2  ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .UserReflectionID = row(0),
                Key .SubScriberID = row(1),
                Key .Response = row(2).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------user Reflection End ------------------------------------------------------

        '----------------------------------Community start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddCommunity")>
        Public Function CommunityAdd(qt As Communitys) As Int32
            Dim q As New Communitys
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteCommunity/{qid}")>
        Public Function CommunityDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Community ID")
            Dim q As New Communitys
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Communities")>
        Public Function GetCommunities() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `CommunityID`, `Name`, `Description` FROM `Community`  order by 2  ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .CommunityID = row(0),
                Key .Name = row(1),
                Key .Descr = row(2).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------Community End ------------------------------------------------------

        '----------------------------------SubScription start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddSubScription")>
        Public Function SubScriptionAdd(qt As SubScriptions) As Int32
            Dim q As New SubScriptions
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteSubScription/{qid}")>
        Public Function SubScriptionDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid SubScription ID")
            Dim q As New SubScriptions
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/SubScriptions")>
        Public Function GetSubScriptions() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `SubscrID`, `ProgramID`, `UserID`, `StartDate`, `EndDate`, `Active`, `Amount`, `AutoRenew`, `DiscountCodeUsed`, `Discount` FROM `subscription`   order by 4  ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .SubScrID = row(0),
                Key .ProgId = row(1),
                Key .Userid = row(2),
                Key .StartDate = row(3),
                 Key .EndDate = row(4),
                Key .Active = row(5),
                Key .Amt = row(6),
                Key .AutoRenew = row(7).ToString(),
                 Key .DiscCodeUsed = row(8),
                Key .Disc = row(9).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------Subscription End ------------------------------------------------------


        '----------------------------------Journal start ------------------------------------------------------

        <HttpPost>
        <Route("~/api/AddJournal")>
        Public Function JournalAdd(qt As Journal) As Int32
            Dim q As New Journal
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteJournal/{qid}")>
        Public Function JournalDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Journal ID")
            Dim q As New Journal
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Journals")>
        Public Function GetJournals() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `JournalID`, `UserID`, `Date`, `ModuleID`, `Notes` FROM `journal`  order by 3  ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .JournalID = row(0),
                Key .UserId = row(1),
                Key .Date = row(2),
                Key .ModuleId = row(3),
                Key .Notes = row(4).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------Journal End ------------------------------------------------------



        '----------------------------------SITE SECTIONS ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddSiteSection")>
        Public Function SiteSectionAdd(fs As SiteSections) As Int32
            Dim f As New SiteSections
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteSiteSection/{fsid}")>
        Public Function SiteSectionDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid SiteSection ID")
            Dim q As New SiteSections
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/SiteSections")>
        Public Function GetSiteSections() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `SiteSectionID`, `SiteSection` FROM `sitesections` order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ID = row(0),
                Key .SiteSection = row(1).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function

        '----------------------------------END SITE SECTIONS ------------------------------------------------------


        '----------------------------------Modules  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddModule")>
        Public Function ModuleAdd(fs As Modules) As Int32
            Dim f As New Modules
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteModule/{fsid}")>
        Public Function ModuleDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Module ID")
            Dim q As New Modules
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Modules")>
        Public Function GetModules() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `ModuleID`, `SectionID`, `ModuleNumber`, `ModuleName` FROM `module`  order by 2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .ModuleID = row(0),
                Key .SectionID = row(1).ToString(),
                Key .ModuleNo = row(2).ToString(),
                Key .ModuleName = row(3).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END Section  ------------------------------------------------------




        ''----------------------------------Question  ------------------------------------------------------
        '<HttpPost>
        '<Route("~/api/AddQuestion")>
        'Public Function QuestionAdd(fs As Questions) As Int32
        '    Dim f As New Questions
        '    Return f.Add(fs)
        'End Function
        '<HttpPost>
        '<Route("~/api/DeleteQuestion/{fsid}")>
        'Public Function QuestionDelete(fsid As Int32) As IHttpActionResult
        '    If fsid <= 0 Then Return BadRequest("Not a valid Question ID")
        '    Dim q As New Questions
        '    If q.Delete(fsid) = 1 Then
        '        Return Ok()
        '    Else
        '        Return BadRequest("Not Deleted the record")
        '    End If
        'End Function
        '<Route("~/api/Questions")>
        'Public Function GetQuestions() As IEnumerable
        '    Dim x As New LibDll.MySqlConn
        '    Dim DS As New DataSet
        '    Dim dt As New DataTable()
        '    DS = x.GetDataSet("SELECT `QuestionID`, `QuesTypeID`, `SectionID`, `Question` FROM `questions`  order by 4 ")
        '    dt = DS.Tables(0)

        '    Dim data = dt.AsEnumerable().[Select](Function(row) New With {
        '        Key .QuestionID = row(0),
        '        Key .QuesTypeId = row(1).ToString(),
        '        Key .SectionID = row(2).ToString(),
        '        Key .Question = row(3).ToString()
        '        })
        '    x.ConnectionClose()
        '    Return data
        'End Function
        ''----------------------------------END Question  ------------------------------------------------------



        '----------------------------------Options  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddOption")>
        Public Function OptionAdd(fs As Options) As Int32
            If fs.CorrectAnswer = "" Then
            ElseIf fs.CorrectAnswer = "0" Then
            ElseIf fs.CorrectAnswer = "1" Then
            Else
                Return 0
                Exit Function
            End If
            Dim f As New Options
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteOption/{fsid}")>
        Public Function OptionDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Option ID")
            Dim q As New Options
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Options")>
        Public Function GetOptions() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `OptionID`, `OptionStr`, `QuestionID`, `CorrectAnswer`, `OptionType` , `Points`  FROM `options`  order by 3 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .OptionID = row(0),
                Key .OptionStr = row(1).ToString(),
                Key .QuestionID = row(2).ToString(),
                Key .CorrectAnswer = row(3).ToString(),
                Key .OptionType = row(4).ToString(),
                Key .Points = row(5).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        <HttpGet>
        <Route("~/api/Options/{qid}")>
        Public Function GetOptions(qid As Int32) As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `OptionID`, `OptionStr`, `QuestionID`, `CorrectAnswer`, `OptionType` , `Points`  FROM `options` where QuestionID = '" & qid & "' order by 3 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .OptionID = row(0),
                Key .OptionStr = row(1).ToString(),
                Key .QuestionID = row(2).ToString(),
                Key .CorrectAnswer = row(3).ToString(),
                Key .OptionType = row(4).ToString(),
                Key .Points = row(5).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END Options  ------------------------------------------------------



        '----------------------------------User Response  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddUserResponse")>
        Public Function UserResponseAdd(fs As UserResponses) As Int32
            Dim f As New UserResponses
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteUserResponse/{fsid}")>
        Public Function UserResponseDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid UserResponse ID")
            Dim q As New UserResponses
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/UserResponses")>
        Public Function GetUserResponses() As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `UserResponseID`, `UserID`, `OptionID` FROM  `userresponse`  order by 2,1 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .UserResponseID = row(0),
                Key .UserID = row(1).ToString(),
                Key .OptionID = row(2).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END User Response  ------------------------------------------------------

        '----------------------------------User Response  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddUser")>
        Public Function UserAdd(fs As Users) As IHttpActionResult
            Dim f As New Users
            Dim mRet As String = f.Add(fs)
            If IsNumeric(mRet) Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteUser/{fsid}")>
        Public Function UserDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid User ID")
            Dim q As New Users
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Users")>
        Public Async Function GetUsers() As Task(Of IEnumerable)
            Dim q As New Users
            Return Await q.GetUsers()
        End Function

        'Public Function GetUsers() As IEnumerable
        '    Dim x As New LibDll.MySqlConn
        '    Dim DS As New DataSet
        '    Dim dt As New DataTable()
        '    DS = x.GetDataSet("SELECT `UserID`, `RoleId`, `FName`, `LName`, `Email`, `DOJ`  FROM `users` WHERE 1 order by 1,2 ")
        '    dt = DS.Tables(0)

        '    Dim data = dt.AsEnumerable().[Select](Function(row) New With {
        '        Key .UserID = row(0),
        '        Key .RoleId = row(1).ToString(),
        '        Key .FName = row(2).ToString(),
        '        Key .LName = row(3).ToString(),
        '        Key .Email = row(4).ToString(),
        '        Key .DOJ = row(5).ToString()
        '        })
        '    x.ConnectionClose()
        '    Return data
        'End Function
        <HttpGet>
        <Route("~/api/Users/{userid}")>
        Public Function GetUsers(userid As Int32) As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `UserID`, `RoleId`, `FName`, `LName`, `Email`, `DOJ`  FROM `users` WHERE UserId = '" & userid & "' order by 1,2 ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                Key .UserID = row(0),
                Key .RoleId = row(1).ToString(),
                Key .FName = row(2).ToString(),
                Key .LName = row(3).ToString(),
                Key .Email = row(4).ToString(),
                Key .DOJ = row(5).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END User Response  --------------------------------------------------


        '----------------------------------Global SEttings   ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddSetting")>
        Public Function SettingAdd(fs As Settings) As IHttpActionResult
            Dim f As New Settings
            Dim mRet As String = f.Add(fs)
            If IsNumeric(mRet) Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteSetting/{fsid}")>
        Public Function SettingDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Setting ID")
            Dim q As New Settings
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Settings")>
        Public Async Function GetSettings() As Task(Of IEnumerable)
            Dim q As New Settings
            Return Await q.GetSettings()
        End Function

        'Public Function GetSettings() As IEnumerable
        '    Dim x As New LibDll.MySqlConn
        '    Dim DS As New DataSet
        '    Dim dt As New DataTable()
        '    DS = x.GetDataSet("SELECT `SettingID`, `RoleId`, `FName`, `LName`, `Email`, `DOJ`  FROM `Settings` WHERE 1 order by 1,2 ")
        '    dt = DS.Tables(0)

        '    Dim data = dt.AsEnumerable().[Select](Function(row) New With {
        '        Key .SettingID = row(0),
        '        Key .RoleId = row(1).ToString(),
        '        Key .FName = row(2).ToString(),
        '        Key .LName = row(3).ToString(),
        '        Key .Email = row(4).ToString(),
        '        Key .DOJ = row(5).ToString()
        '        })
        '    x.ConnectionClose()
        '    Return data
        'End Function
        <HttpGet>
        <Route("~/api/Settings/{Settingid}")>
        Public Function GetSettings(Settingid As Int32) As IEnumerable
            Dim x As New LibDll.MySqlConn
            Dim DS As New DataSet
            Dim dt As New DataTable()
            DS = x.GetDataSet("SELECT `GSetID`, `SettingName`, `Value`  FROM `globalsettings` WHERE GSetID = '" & Settingid & "'  ")
            dt = DS.Tables(0)

            Dim data = dt.AsEnumerable().[Select](Function(row) New With {
                 Key .SettingID = row(0),
                Key .SettingName = row(1).ToString(),
                Key .Value = row(2).ToString()
                })
            x.ConnectionClose()
            Return data
        End Function
        '----------------------------------END Global SEttings Response  --------------------------------------------------


        '----------------------------------Question  ------------------------------------------------------
        <HttpPost>
        <Route("~/api/AddQuestion")>
        Public Function QuestionAdd(fs As Questions) As Int32
            Dim f As New Questions
            Return f.Add(fs)
        End Function
        <HttpPost>
        <Route("~/api/DeleteQuestion/{fsid}")>
        Public Function QuestionDelete(fsid As Int32) As IHttpActionResult
            If fsid <= 0 Then Return BadRequest("Not a valid Question ID")
            Dim q As New Questions
            If q.Delete(fsid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Questions")>
        Public Async Function GetQuestions() As Task(Of IEnumerable)
            Dim q As New Questions
            Return Await q.GetQuestions()
        End Function
        '<Route("~/api/Questions")>
        'Public Function GetQuestions() As IEnumerable
        '    Dim x As New LibDll.MySqlConn
        '    Dim DS As New DataSet
        '    Dim dt As New DataTable()
        '    DS = x.GetDataSet("SELECT `QuestionID`, `QuesTypeID`, `SectionID`, `Question` FROM `questions`  order by 4 ")
        '    dt = DS.Tables(0)

        '    Dim data = dt.AsEnumerable().[Select](Function(row) New With {
        '        Key .QuestionID = row(0),
        '        Key .QuesTypeId = row(1).ToString(),
        '        Key .SectionID = row(2).ToString(),
        '        Key .Question = row(3).ToString()
        '        })
        '    x.ConnectionClose()
        '    Return data
        'End Function

        <HttpGet>
        <Route("~/api/Questions/{atid}")>
        Public Async Function GetQuestions(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Questions
            Return Await q.GetQuestions(atid)
        End Function
        '----------------------------------END Question  ------------------------------------------------------

        '----------------------------------ASSESSMENT   --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddAssessment")>
        Public Function AssessmentAdd(qt As Assessment) As Int32
            Dim q As New Assessment
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteAssessment/{qid}")>
        Public Function AssessmentDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Assessment ID")
            Dim q As New Assessment
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Assessments")>
        Public Async Function GetAssessments() As Task(Of IEnumerable)
            Dim q As New Assessment
            Return Await q.GetAssessments
        End Function
        <HttpGet>
        <Route("~/api/Assessments/{atid}")>
        Public Async Function GetAssessments(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Assessment
            Return Await q.GetAssessments(atid)
        End Function


        '----------------------------------ASSESSMENT  END------------------------------------------------------


        '----------------------------------AssessType   --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddAssessType")>
        Public Function AssessTypeAdd(qt As AssType) As Int32
            Dim q As New AssType
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteAssessType/{qid}")>
        Public Function AssessTypeDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid AssessType ID")
            Dim q As New AssType
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/AssessTypes")>
        Public Async Function GetAssessTypes() As Task(Of IEnumerable)
            Dim q As New AssType
            Return Await q.GetAssTypes
        End Function
        <HttpGet>
        <Route("~/api/AssessTypes/{atid}")>
        Public Async Function GetAssessTypes(atid As Int32) As Task(Of IEnumerable)
            Dim q As New AssType
            Return Await q.GetAssTypes(atid)
        End Function


        '----------------------------------AssessType  END------------------------------------------------------



        ''----------------------------------Discuss Category   --------------------------------------------------
        '<HttpPost>
        '<Route("~/api/AddDiscussCategory")>
        'Public Function DiscussCategoryAdd(qt As DiscCat) As Int32
        '    Dim q As New DiscCat
        '    Return q.Add(qt)
        'End Function
        '<HttpPost>
        '<Route("~/api/DeleteDiscussCategory/{qid}")>
        'Public Function DiscussCategoryDel(qid As Int32) As IHttpActionResult
        '    If qid <= 0 Then Return BadRequest("Not a valid Discuss Category ID")
        '    Dim q As New DiscCat
        '    If q.Delete(qid) = 1 Then
        '        Return Ok()
        '    Else
        '        Return BadRequest("Not Deleted the record")
        '    End If
        'End Function

        '<Route("~/api/DiscussCategories")>
        'Public Async Function GetDiscussCategorys() As Task(Of IEnumerable)
        '    Dim q As New DiscCat
        '    Return Await q.GetDiscCats
        'End Function
        '<Route("~/api/DiscussCategories/{atid}")>
        'Public Async Function GetDiscussCategorys(atid As Int32) As Task(Of IEnumerable)
        '    Dim q As New DiscCat
        '    Return Await q.GetDiscCats(atid)
        'End Function
        '----------------------------------Discuss Cat  END------------------------------------------------------
        '----------------------------------Tags Category   --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddTag")>
        Public Function TagAdd(qt As Tag) As Int32
            Dim q As New Tag
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteTag/{qid}")>
        Public Function TagDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Tag ID")
            Dim q As New Tag
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Tags")>
        Public Async Function GetTags() As Task(Of IEnumerable)
            Dim q As New Tag
            Return Await q.GetTagNames
        End Function
        <HttpGet>
        <Route("~/api/Tags/{atid}")>
        Public Async Function GetTags(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Tag
            Return Await q.GetTagNames(atid)
        End Function
        '----------------------------------Tags END------------------------------------------------------


        '----------------------------------Discuss Category   --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddDiscussCategory")>
        Public Function DiscussCategoryAdd(qt As DiscCat) As Int32
            Dim q As New DiscCat
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteDiscussCategory/{qid}")>
        Public Function DiscussCategoryDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Discuss Category ID")
            Dim q As New DiscCat
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/DiscussCategories")>
        Public Async Function GetDiscussCategorys() As Task(Of IEnumerable)
            Dim q As New DiscCat
            Return Await q.GetDiscCats
        End Function
        <HttpGet>
        <Route("~/api/DiscussCategories/{atid}")>
        Public Async Function GetDiscussCategorys(atid As Int32) As Task(Of IEnumerable)
            Dim q As New DiscCat
            Return Await q.GetDiscCats(atid)
        End Function
        '----------------------------------Discuss Cat  END------------------------------------------------------
        '----------------------------------WISDOM GROUP Category   --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddWisdomGr")>
        Public Function WGAdd(qt As WisdomGroup) As Int32
            Dim q As New WisdomGroup
            Return q.Add(qt)
        End Function
        <HttpPost>
        <Route("~/api/DeleteWisdomGr/{qid}")>
        Public Function WGDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Wisdom Group ID")
            Dim q As New WisdomGroup
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/WisdomGroups")>
        Public Async Function GetWGs() As Task(Of IEnumerable)
            Dim q As New WisdomGroup
            Return Await q.GetWGs
        End Function
        <HttpGet>
        <Route("~/api/WisdomGroups/{atid}")>
        Public Async Function GetWGs(atid As Int32) As Task(Of IEnumerable)
            Dim q As New WisdomGroup
            Return Await q.GetWGs(atid)
        End Function
        '----------------------------------WISDOM GROUP END------------------------------------------------------



        '----------------------------------Coupon Category   --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddCoupon")>
        Public Function CouponAdd(qt As Coupon) As IHttpActionResult
            Dim q As New Coupon
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteCoupon/{qid}")>
        Public Function CouponDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Coupon ID")
            Dim q As New Coupon
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Coupons")>
        Public Async Function GetCoupons() As Task(Of IEnumerable)
            Dim q As New Coupon
            Return Await q.GetCoupons
        End Function
        <HttpGet>
        <Route("~/api/Coupons/{atid}")>
        Public Async Function GetCoupons(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Coupon
            Return Await q.GetCoupons(atid)
        End Function
        '----------------------------------Coupon END------------------------------------------------------






        '----------------------------------scenarios    --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddScenario")>
        Public Function ScenarioAdd(qt As scenarios) As IHttpActionResult
            Dim q As New scenarios
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteScenario/{qid}")>
        Public Function ScenarioDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Scenario ID")
            Dim q As New scenarios
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Scenarios")>
        Public Async Function GetScenarios() As Task(Of IEnumerable)
            Dim q As New scenarios
            Return Await q.GetScenarios
        End Function
        <HttpGet>
        <Route("~/api/Scenarios/{atid}")>
        Public Async Function GetScenarios(atid As Int32) As Task(Of IEnumerable)
            Dim q As New scenarios
            Return Await q.GetScenarios(atid)
        End Function
        '----------------------------------Coupon END------------------------------------------------------







        '----------------------------------Activation Key    --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddActivationKey")>
        Public Function ActKeyAdd(qt As ActKey) As IHttpActionResult
            Dim q As New ActKey
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/GenerateActKeys")>
        Public Function GenerateActKeys(qt As ActKey) As IHttpActionResult
            Dim q As New ActKey
            Dim mRet As String() = q.GenerateActKey(qt)
            If mRet.Count > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest("Not generated")
            End If
        End Function
        <HttpGet>
        <Route("~/api/NextAlpha")>
        Public Function NextAlpha() As IHttpActionResult
            Dim q As New ActKey
            Dim mRet As String = q.CheckIncreseAlpha
            If mRet.Length > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest("Not generated")
            End If
        End Function
        <HttpGet>
        <Route("~/api/NextAlpha/{mchar}")>
        Public Function AlphaNext(mchar As String) As IHttpActionResult
            Dim q As New ActKey
            Dim mRet As String = q.CheckIncreseAlpha(mchar)
            If mRet.Length > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest("Not generated")
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteActivationKey/{qid}")>
        Public Function ActKeyDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid ActivationKey ID")
            Dim q As New ActKey
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/ActivationKeys")>
        Public Async Function GetActKeys() As Task(Of IEnumerable)
            Dim q As New ActKey
            Return Await q.Getactivationkey
        End Function
        <HttpGet>
        <Route("~/api/ActivationKeys/{atid}")>
        Public Async Function GetActKeys(atid As Int32) As Task(Of IEnumerable)
            Dim q As New ActKey
            Return Await q.Getactivationkey(atid)
        End Function
        <HttpGet>
        <Route("~/api/VerifyActKey/{actkey}")>
        Public Function Verify(actkey As String) As IHttpActionResult
            If actkey = "" Then Return BadRequest("Activation Key can not be blank")
            Dim q As New ActKey
            Dim mRetStr As String = q.Verify(actkey)
            If mRetStr = "1" Then
                Return Ok()
            Else
                Return BadRequest(mRetStr)
            End If
        End Function

        '----------------------------------Activation Key END------------------------------------------------------




        '----------------------------------Testimonials --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddTestimonial")>
        Public Function AddTestimonial(qt As testimonials) As IHttpActionResult
            Dim q As New testimonials
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteTestimonial/{qid}")>
        Public Function testimonialsDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Testimonial ID")
            Dim q As New testimonials
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/Testimonials")>
        Public Async Function GetTestimonials() As Task(Of IEnumerable)
            Dim q As New testimonials
            Return Await q.GetTestimonials
        End Function
        <HttpGet>
        <Route("~/api/Testimonials/{atid}")>
        Public Async Function GetTestimonials(atid As Int32) As Task(Of IEnumerable)
            Dim q As New testimonials
            Return Await q.GetTestimonials(atid)
        End Function
        '----------------------------------Testimonials  END------------------------------------------------------


        '----------------------------------Gifts --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddGift")>
        Public Function GiftAdd(qt As Gifts) As IHttpActionResult
            Dim q As New Gifts
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteGift/{qid}")>
        Public Function GiftDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Gift ID")
            Dim q As New Gifts
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/GetGiftList")>
        Public Async Function GiftList() As Task(Of IEnumerable)
            Dim q As New Gifts
            Return q.GetGiftList
        End Function

        <HttpGet>
        <Route("~/api/GetGiftList/{atid}")>
        Public Async Function GiftList(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Gifts
            Return q.GetGiftList(atid)
        End Function
        '----------------------------------Gifts  END------------------------------------------------------





        '----------------------------------Refer --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddRefer")>
        Public Function ReferAdd(qt As Refer) As IHttpActionResult
            Dim q As New Refer
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteRefer/{qid}")>
        Public Function ReferDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Refer ID")
            Dim q As New Refer
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/GetReferList")>
        Public Async Function ReferList() As Task(Of IEnumerable)
            Dim q As New Refer
            Return q.GetRefers
        End Function

        <HttpGet>
        <Route("~/api/GetReferList/{atid}")>
        Public Async Function ReferList(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Refer
            Return q.GetRefers(atid)
        End Function
        '----------------------------------Refer  END------------------------------------------------------


        '----------------------------------Screen --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddScreen")>
        Public Function ScreenAdd(qt As screens) As IHttpActionResult
            Dim q As New screens
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeleteScreen/{qid}")>
        Public Function ScreenDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Screen ID")
            Dim q As New screens
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/GetScreenList")>
        Public Async Function ScreenList() As Task(Of IEnumerable)
            Dim q As New screens
            Return Await q.GetScreens
        End Function

        <HttpGet>
        <Route("~/api/GetScreenList/{atid}")>
        Public Async Function ScreenList(atid As Int32) As Task(Of IEnumerable)
            Dim q As New screens
            Return Await q.GetScreens(atid)
        End Function

        <HttpGet>
        <Route("~/api/GetScreensByGlobSetID/{atid}")>
        Public Async Function GlobScreenList(atid As Int32) As Task(Of IEnumerable)
            Dim q As New screens
            Return Await q.GetScrByGSetID(atid)
        End Function

        <HttpGet>
        <Route("~/api/GetScreensByModule/{atid}")>
        Public Async Function GetScreensByModule(atid As Int32) As Task(Of IEnumerable)
            Dim q As New screens
            Return Await q.GetScrByModule(atid)
        End Function
        '----------------------------------Screen  END------------------------------------------------------


        '----------------------------------Payment --------------------------------------------------
        <HttpPost>
        <Route("~/api/AddPayment")>
        Public Function PaymentAdd(qt As Payments) As IHttpActionResult
            Dim q As New Payments
            Dim mRet As String = q.Add(qt)
            If IsNumeric(mRet) And mRet > "0" Then
                Return Ok(mRet)
            Else
                Return BadRequest(mRet)
            End If
        End Function
        <HttpPost>
        <Route("~/api/DeletePayment/{qid}")>
        Public Function PaymentDel(qid As Int32) As IHttpActionResult
            If qid <= 0 Then Return BadRequest("Not a valid Payment ID")
            Dim q As New Payments
            If q.Delete(qid) = 1 Then
                Return Ok()
            Else
                Return BadRequest("Not Deleted the record")
            End If
        End Function
        <HttpGet>
        <Route("~/api/PaymentList")>
        Public Async Function PaymentList() As Task(Of IEnumerable)
            Dim q As New Payments
            Return Await q.GetPayments
        End Function

        <HttpGet>
        <Route("~/api/PaymentList/{atid}")>
        Public Async Function PaymentList(atid As Int32) As Task(Of IEnumerable)
            Dim q As New Payments
            Return Await q.GetPayments(atid)
        End Function

        '----------------------------------Payment  END------------------------------------------------------



    End Class
End Namespace