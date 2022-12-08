import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18035Page } from './s18035.page';

describe('S18035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18035Page;
  let fixture: ComponentFixture<S18035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
