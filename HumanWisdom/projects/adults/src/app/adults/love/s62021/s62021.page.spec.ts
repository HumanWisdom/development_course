import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62021Page } from './s62021.page';

describe('S62021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62021Page;
  let fixture: ComponentFixture<S62021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
