import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140018Page } from './s140018.page';

describe('S140018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140018Page;
  let fixture: ComponentFixture<S140018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
