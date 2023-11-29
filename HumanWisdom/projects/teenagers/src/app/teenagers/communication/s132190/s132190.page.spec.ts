import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132190Page } from './s132190.page';

describe('S132190Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132190Page;
  let fixture: ComponentFixture<S132190Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132190Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132190Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
