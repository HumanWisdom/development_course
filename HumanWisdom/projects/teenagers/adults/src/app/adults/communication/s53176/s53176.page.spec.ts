import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53176Page } from './s53176.page';

describe('S53176Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53176Page;
  let fixture: ComponentFixture<S53176Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53176Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53176Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
