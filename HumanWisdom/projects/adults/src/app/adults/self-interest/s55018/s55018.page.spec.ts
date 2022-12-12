import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55018Page } from './s55018.page';

describe('S55018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55018Page;
  let fixture: ComponentFixture<S55018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
