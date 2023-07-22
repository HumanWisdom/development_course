import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132075Page } from './s132075.page';

describe('S132075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132075Page;
  let fixture: ComponentFixture<S132075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
