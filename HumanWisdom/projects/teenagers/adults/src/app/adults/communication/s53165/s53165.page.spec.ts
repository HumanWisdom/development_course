import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53165Page } from './s53165.page';

describe('S53165Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53165Page;
  let fixture: ComponentFixture<S53165Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53165Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53165Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
