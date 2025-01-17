import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { savedPage } from './saved.page';


describe('savedPage', () => {
  let component: savedPage;
  let fixture: ComponentFixture<savedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ savedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(savedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
