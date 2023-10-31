import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53134Page } from './s53134.page';

describe('S53134Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53134Page;
  let fixture: ComponentFixture<S53134Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53134Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53134Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
