import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25006Page } from './s25006.page';

describe('S25006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25006Page;
  let fixture: ComponentFixture<S25006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
