import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61036tPage } from './s61036t.page';

describe('S61036tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61036tPage;
  let fixture: ComponentFixture<S61036tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61036tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61036tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
