import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S43000Page } from './s43000.page';

describe('S43000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S43000Page;
  let fixture: ComponentFixture<S43000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S43000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S43000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
