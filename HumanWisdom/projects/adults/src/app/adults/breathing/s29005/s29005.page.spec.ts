import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29005Page } from './s29005.page';

describe('S29005Page', () => {
  let component: S29005Page;
  let fixture: ComponentFixture<S29005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
