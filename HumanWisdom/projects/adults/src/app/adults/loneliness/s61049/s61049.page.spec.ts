import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61049Page } from './s61049.page';

describe('S61049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61049Page;
  let fixture: ComponentFixture<S61049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
