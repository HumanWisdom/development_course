import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53167Page } from './s53167.page';

describe('S53167Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53167Page;
  let fixture: ComponentFixture<S53167Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53167Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53167Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
