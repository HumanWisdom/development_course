import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18075Page } from './s18075.page';

describe('S18075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18075Page;
  let fixture: ComponentFixture<S18075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
