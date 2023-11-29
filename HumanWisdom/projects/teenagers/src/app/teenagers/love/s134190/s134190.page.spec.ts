import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134190Page } from './s134190.page';

describe('S134190Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134190Page;
  let fixture: ComponentFixture<S134190Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134190Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134190Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
