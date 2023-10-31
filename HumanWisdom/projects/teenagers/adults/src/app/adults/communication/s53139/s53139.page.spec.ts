import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53139Page } from './s53139.page';

describe('S53139Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53139Page;
  let fixture: ComponentFixture<S53139Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53139Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53139Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
