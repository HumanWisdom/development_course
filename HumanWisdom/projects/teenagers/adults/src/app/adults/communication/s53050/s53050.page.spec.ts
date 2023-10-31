import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53050Page } from './s53050.page';

describe('S53050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53050Page;
  let fixture: ComponentFixture<S53050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
