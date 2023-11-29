import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132165Page } from './s132165.page';

describe('S132165Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132165Page;
  let fixture: ComponentFixture<S132165Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132165Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132165Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
