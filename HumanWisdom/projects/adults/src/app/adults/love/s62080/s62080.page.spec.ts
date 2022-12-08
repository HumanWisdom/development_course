import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62080Page } from './s62080.page';

describe('S62080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62080Page;
  let fixture: ComponentFixture<S62080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
