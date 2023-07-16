import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53117Page } from './s132119.page';

describe('S53117Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53117Page;
  let fixture: ComponentFixture<S53117Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53117Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53117Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
