import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28008Page } from './s28008.page';

describe('S28008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28008Page;
  let fixture: ComponentFixture<S28008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
