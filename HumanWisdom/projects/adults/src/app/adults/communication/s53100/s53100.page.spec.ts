import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53100Page } from './s53100.page';

describe('S53100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53100Page;
  let fixture: ComponentFixture<S53100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
