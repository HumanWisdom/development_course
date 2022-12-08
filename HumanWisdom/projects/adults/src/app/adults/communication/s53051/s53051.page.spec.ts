import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53051Page } from './s53051.page';

describe('S53051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53051Page;
  let fixture: ComponentFixture<S53051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
