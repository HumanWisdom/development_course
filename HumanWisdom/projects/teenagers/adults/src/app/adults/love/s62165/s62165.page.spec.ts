import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62165Page } from './s62165.page';

describe('S62165Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62165Page;
  let fixture: ComponentFixture<S62165Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62165Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62165Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
