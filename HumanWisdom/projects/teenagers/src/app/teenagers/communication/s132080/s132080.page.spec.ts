import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132080Page } from './s132080.page';

describe('S132080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132080Page;
  let fixture: ComponentFixture<S132080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
