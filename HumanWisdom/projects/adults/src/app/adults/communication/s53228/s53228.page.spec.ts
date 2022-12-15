import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53228Page } from './s53228.page';

describe('S53228Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53228Page;
  let fixture: ComponentFixture<S53228Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53228Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53228Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
