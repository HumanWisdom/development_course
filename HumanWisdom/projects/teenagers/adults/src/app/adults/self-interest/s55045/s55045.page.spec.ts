import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55045Page } from './s55045.page';

describe('S55045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55045Page;
  let fixture: ComponentFixture<S55045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
