import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132213Page } from './s132213.page';

describe('S132213Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132213Page;
  let fixture: ComponentFixture<S132213Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132213Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132213Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
