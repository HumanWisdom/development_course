import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59165Page } from './s59165.page';

describe('S59165Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59165Page;
  let fixture: ComponentFixture<S59165Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59165Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59165Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
